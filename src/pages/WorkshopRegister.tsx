import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Header } from "@/components/Header";
import { Footer } from "@/components/sections/Footer";
import { workshops } from "@/data/workshops";
import { useToast } from "@/hooks/use-toast";

const WorkshopRegister = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const workshop = workshops.find(w => w.id === id);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    designation: "",
    experience: "",
    expectations: "",
    agreeTerms: false,
  });

  if (!workshop) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Workshop Not Found</h1>
          <Button onClick={() => navigate("/workshops")}>Back to Workshops</Button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "We'll send you a confirmation email shortly.",
    });
    navigate(`/workshop/${id}`);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Workshop
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Registration Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2"
            >
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Workshop Registration</CardTitle>
                  <p className="text-muted-foreground">Fill in your details to register for this workshop</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleChange("firstName", e.target.value)}
                          placeholder="John"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleChange("lastName", e.target.value)}
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization / College</Label>
                        <Input
                          id="organization"
                          value={formData.organization}
                          onChange={(e) => handleChange("organization", e.target.value)}
                          placeholder="Your organization"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="designation">Designation / Role</Label>
                        <Input
                          id="designation"
                          value={formData.designation}
                          onChange={(e) => handleChange("designation", e.target.value)}
                          placeholder="Your role"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Experience Level</Label>
                      <Select onValueChange={(value) => handleChange("experience", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner - No prior experience</SelectItem>
                          <SelectItem value="intermediate">Intermediate - Some knowledge</SelectItem>
                          <SelectItem value="advanced">Advanced - Working professional</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="expectations">What do you expect to learn? (Optional)</Label>
                      <Textarea
                        id="expectations"
                        value={formData.expectations}
                        onChange={(e) => handleChange("expectations", e.target.value)}
                        placeholder="Tell us what you hope to gain from this workshop..."
                        rows={4}
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => handleChange("agreeTerms", checked as boolean)}
                      />
                      <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                        I agree to the terms and conditions and privacy policy. I understand that registration fees are non-refundable.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                      disabled={!formData.agreeTerms}
                    >
                      Complete Registration - ₹{workshop.price}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Workshop Summary Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <Card className="border-border/50 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-foreground">Workshop Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  
                  <h3 className="font-semibold text-foreground">{workshop.title}</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{workshop.location}</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground">Workshop Fee</span>
                      <span className="font-semibold text-foreground">₹{workshop.price}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">GST (18%)</span>
                      <span className="text-muted-foreground">Included</span>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Certificate Included
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Hands-on Labs Access
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Study Materials
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkshopRegister;
