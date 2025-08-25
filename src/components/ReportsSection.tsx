import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Users, Target } from "lucide-react";
import analyticsDashboard from "@/assets/analytics-dashboard.jpg";
import recruitmentReports from "@/assets/performance-reports-new.jpg";
import hrInsights from "@/assets/hr-insights.jpg";
const ReportsSection = () => {
  const reportFeatures = [{
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time insights into your recruitment performance with comprehensive metrics and KPIs.",
    image: analyticsDashboard,
    color: "from-primary to-primary-light"
  }, {
    icon: TrendingUp,
    title: "Performance Reports",
    description: "Track hiring success rates, time-to-fill, and candidate pipeline progression with detailed reports.",
    image: recruitmentReports,
    color: "from-secondary to-secondary-light"
  }, {
    icon: Users,
    title: "HR Insights",
    description: "Gain valuable insights into talent acquisition trends and optimize your hiring strategy.",
    image: hrInsights,
    color: "from-accent to-accent-light"
  }];
  return <section className="py-section bg-background">
      <div className="max-w-7xl mx-auto px-container">
        <div className="text-center mb-16">
          <h2 className="text-h1 font-bold text-foreground mb-4">
            Powerful Reporting & Analytics
          </h2>
          <p className="text-large text-muted-foreground max-w-2xl mx-auto">
            Make data-driven hiring decisions with comprehensive reporting tools 
            and actionable insights into your recruitment process.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {reportFeatures.map((feature, index) => <Card key={index} className="group hover:shadow-large transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="absolute top-4 left-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center text-white shadow-medium`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-h3 font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>)}
        </div>

        {/* Stats Section */}
        

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-secondary text-white border-0 shadow-large">
            <CardContent className="p-8">
              <Target className="h-12 w-12 mx-auto mb-4 text-white" />
              
              
              <Button variant="hero" size="lg">
                View Sample Reports
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ReportsSection;