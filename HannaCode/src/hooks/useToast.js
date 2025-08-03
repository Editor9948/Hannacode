"use client";

import { useState, useEffect, useCallback } from "react";

// Toast variants
const TOAST_VARIANTS = [
  "default",
  "success",
  "error",
  "warning",
  "info",
  "destructive",
];

// Toast store and listeners
let toasts = [];
let listeners = [];

// Notify all listeners of changes
const notifyListeners = () => {
  listeners.forEach((listener) => listener([...toasts]));
};

export function useToast() {
  const [localToasts, setLocalToasts] = useState([]);

  // Subscribe to toast changes
  useEffect(() => {
    const listener = (updatedToasts) => setLocalToasts(updatedToasts);
    listeners.push(listener);
    listener([...toasts]);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  // Add a toast
  const toast = useCallback(
    ({ title, description, variant = "default", duration = 5000 }) => {
      if (!TOAST_VARIANTS.includes(variant)) variant = "default";
      const id = Math.random().toString(36).substring(2, 9);
      const newToast = {
        id,
        title,
        description,
        variant,
        duration,
        visible: true,
      };
      toasts = [...toasts, newToast];
      notifyListeners();

      // Auto-dismiss after duration
      setTimeout(() => {
        dismissToast(id);
      }, duration);

      return id;
    },
    []
  );

  // Dismiss a toast
  const dismissToast = useCallback((id) => {
    toasts = toasts.map((t) =>
      t.id === id ? { ...t, visible: false } : t
    );
    notifyListeners();
    setTimeout(() => {
      toasts = toasts.filter((t) => t.id !== id);
      notifyListeners();
    }, 300);
  }, []);

  return {
    toast,
    dismissToast,
    toasts: localToasts,
  };
}

// Toast container component
export function ToastContainer() {
  const { toasts, dismissToast } = useToast();

  return (
    <div className="fixed top-0 right-0 z-50 p-4 space-y-4 max-w-md w-full">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`rounded-md shadow-lg p-4 transition-all duration-300 transform ${
            toast.visible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          } ${
            toast.variant === "destructive"
              ? "bg-destructive text-destructive-foreground"
              : toast.variant === "success"
              ? "bg-primary text-white"
              : toast.variant === "error"
              ? "bg-red-500 text-white"
              : toast.variant === "warning"
              ? "bg-yellow-500 text-white"
              : toast.variant === "info"
              ? "bg-primary text-white"
              : "bg-background border"
          }`}
        >
          <div className="flex justify-between items-start">
            <div>
              {toast.title && <h4 className="font-medium">{toast.title}</h4>}
              {toast.description && (
                <p className="text-sm mt-1">{toast.description}</p>
              )}
            </div>
            <button
              onClick={() => dismissToast(toast.id)}
              className="ml-4 text-sm hover:opacity-70"
              aria-label="Close toast"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}