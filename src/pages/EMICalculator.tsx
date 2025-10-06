import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [tenure, setTenure] = useState(36);
  const [interestRate, setInterestRate] = useState(10.5);
  const [loanType, setLoanType] = useState("truck");

  // Calculate EMI
  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure;

    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                (Math.pow(1 + monthlyRate, months) - 1);
    
    return Math.round(emi);
  };

  const emi = calculateEMI();
  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - loanAmount;

  // Preset loan types
  const loanPresets = {
    truck: { rate: 10.5, maxAmount: 5000000 },
    harvester: { rate: 11.0, maxAmount: 3000000 },
    car: { rate: 9.5, maxAmount: 2000000 },
  };

  const handleLoanTypeChange = (type: string) => {
    setLoanType(type);
    setInterestRate(loanPresets[type as keyof typeof loanPresets].rate);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6 shadow-lg">
              <Calculator className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              EMI <span className="text-gradient">Calculator</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Calculate your monthly installments and plan your finances better
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {/* Calculator Inputs */}
            <Card className="lg:col-span-3 shadow-xl border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Calculate Your EMI</CardTitle>
                <CardDescription>Adjust the values to see your monthly payment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Loan Type */}
                <div className="space-y-3">
                  <Label htmlFor="loan-type" className="text-base font-semibold">Loan Type</Label>
                  <Select value={loanType} onValueChange={handleLoanTypeChange}>
                    <SelectTrigger id="loan-type" className="h-12">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="truck">Truck Finance</SelectItem>
                      <SelectItem value="harvester">Harvester Finance</SelectItem>
                      <SelectItem value="car">4-Wheeler Finance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Loan Amount */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="text-base font-semibold">Loan Amount</Label>
                    <span className="text-2xl font-bold text-primary">₹{loanAmount.toLocaleString()}</span>
                  </div>
                  <Slider
                    value={[loanAmount]}
                    onValueChange={(value) => setLoanAmount(value[0])}
                    min={100000}
                    max={loanPresets[loanType as keyof typeof loanPresets].maxAmount}
                    step={50000}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>₹1L</span>
                    <span>₹{(loanPresets[loanType as keyof typeof loanPresets].maxAmount / 100000).toFixed(0)}L</span>
                  </div>
                </div>

                {/* Tenure */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="text-base font-semibold">Loan Tenure</Label>
                    <span className="text-2xl font-bold text-secondary">{tenure} months</span>
                  </div>
                  <Slider
                    value={[tenure]}
                    onValueChange={(value) => setTenure(value[0])}
                    min={12}
                    max={84}
                    step={12}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>1 year</span>
                    <span>7 years</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="text-base font-semibold">Interest Rate (p.a.)</Label>
                    <span className="text-2xl font-bold text-accent">{interestRate.toFixed(1)}%</span>
                  </div>
                  <Slider
                    value={[interestRate]}
                    onValueChange={(value) => setInterestRate(value[0])}
                    min={8}
                    max={15}
                    step={0.5}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>8%</span>
                    <span>15%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="lg:col-span-2 shadow-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="text-2xl">Your EMI Breakdown</CardTitle>
                <CardDescription>Monthly payment details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Monthly EMI */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground text-center">
                  <p className="text-sm font-medium mb-2">Monthly EMI</p>
                  <p className="text-4xl font-bold">₹{emi.toLocaleString()}</p>
                </div>

                {/* Breakdown */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 rounded-lg bg-background border">
                    <span className="text-muted-foreground">Principal Amount</span>
                    <span className="font-bold text-foreground">₹{loanAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-background border">
                    <span className="text-muted-foreground">Total Interest</span>
                    <span className="font-bold text-accent">₹{totalInterest.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg bg-background border">
                    <span className="text-muted-foreground">Total Payment</span>
                    <span className="font-bold text-secondary">₹{totalPayment.toLocaleString()}</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 pt-4">
                  <Button asChild className="w-full bg-gold hover:bg-gold/90 text-gold-foreground font-semibold">
                    <Link to="/contact">
                      Apply for Loan
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mt-12">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2 text-foreground">What is EMI?</h3>
                <p className="text-sm text-muted-foreground">
                  EMI (Equated Monthly Installment) is the fixed amount you pay every month to repay your loan, including principal and interest.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2 text-foreground">How is it calculated?</h3>
                <p className="text-sm text-muted-foreground">
                  EMI is calculated using the loan amount, interest rate, and tenure. The formula ensures equal monthly payments throughout the loan period.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2 text-foreground">Flexible Options</h3>
                <p className="text-sm text-muted-foreground">
                  We offer flexible tenure options and competitive interest rates to help you manage your finances better. Contact us for personalized plans.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EMICalculator;
