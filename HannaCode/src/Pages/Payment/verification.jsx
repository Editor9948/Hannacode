import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useToast } from "../../hooks/useToast";
import { Loader2 } from "lucide-react";


const API_URL = process.env.REACT_APP_API_URL 

export default function PaymentVerification() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [verifying, setVerifying] = useState(true);

  useEffect(() => {
    const verifyPayment = async () => {
      const reference = searchParams.get("reference");
      if (!reference) {
        toast({
          title: "Error",
          description: "Invalid payment reference",
          variant: "error",
        });
        navigate("/pricing");
        return;
      }

      try {
        const token = localStorage.getItem('token');
        
        const response = await fetch(`${API_URL}/payments/verify/${reference}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (data.success) {
          // Update user role in localStorage to reflect premium status
          const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
          if (currentUser) {
            currentUser.role = 'premium';
            localStorage.setItem('user', JSON.stringify(currentUser));
            console.log('User role updated to premium in localStorage');
          }
          
          toast({
            title: "Payment Successful",
            description: "Your subscription has been activated",
            variant: "success",
          });
          navigate("/payment/success");
        } else {
          throw new Error(data.error || "Payment verification failed");
        }
      } catch (error) {
        toast({
          title: "Verification Failed",
          description: error.message || "There was an error verifying your payment",
          variant: "error",
        });
        navigate("/pricing");
      } finally {
        setVerifying(false);
      }
    };

    verifyPayment();
  }, [navigate, searchParams, toast]);

  if (verifying) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Verifying Payment</h2>
          <p className="text-muted-foreground">Please wait while we confirm your payment...</p>
        </div>
      </div>
    );
  }

  return null;
}
