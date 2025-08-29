import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Bell, 
  Shield, 
  CreditCard, 
  Heart, 
  Star, 
  Settings, 
  LogOut,
  ChevronRight,
  Globe,
  HelpCircle,
  MessageCircle
} from "lucide-react";

const Account = () => {
  const userStats = {
    totalBookings: 8,
    totalSpent: "₹95,000",
    memberSince: "2023",
    rating: 4.8
  };

  const menuItems = [
    {
      icon: User,
      title: "Edit Profile",
      description: "Update your personal information",
      action: () => {}
    },
    {
      icon: CreditCard,
      title: "Payment Methods",
      description: "Manage your payment options",
      action: () => {}
    },
    {
      icon: Heart,
      title: "Saved Properties",
      description: "View your wishlist",
      badge: "12",
      action: () => {}
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Manage your preferences",
      action: () => {}
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Account security settings",
      action: () => {}
    },
    {
      icon: Globe,
      title: "Language",
      description: "हिंदी, English, ગુજરાતી",
      action: () => {}
    },
    {
      icon: HelpCircle,
      title: "Help & Support",
      description: "Get help or contact us",
      action: () => {}
    }
  ];

  return (
    <div className="pb-20">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="bg-primary text-primary-foreground text-xl">
              RK
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-xl font-semibold">Rahul Kumar</h2>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span>{userStats.rating} rating</span>
              <span>•</span>
              <span>Member since {userStats.memberSince}</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="secondary" className="text-xs">
                Verified User
              </Badge>
              <Badge className="text-xs bg-accent text-accent-foreground">
                Premium
              </Badge>
            </div>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-3 text-center">
              <div className="text-lg font-bold text-primary">{userStats.totalBookings}</div>
              <div className="text-xs text-muted-foreground">Total Bookings</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 text-center">
              <div className="text-lg font-bold text-primary">{userStats.totalSpent}</div>
              <div className="text-xs text-muted-foreground">Total Spent</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Button variant="outline" className="h-auto py-3 flex-col gap-2">
            <Phone className="w-5 h-5" />
            <span className="text-sm">Call Support</span>
          </Button>
          <Button variant="outline" className="h-auto py-3 flex-col gap-2">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">Live Chat</span>
          </Button>
        </div>

        {/* Personal Information */}
        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="text-lg">Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <div>
                <div className="font-medium">rahul.kumar@email.com</div>
                <div className="text-sm text-muted-foreground">Email</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <div>
                <div className="font-medium">+91 98765 43210</div>
                <div className="text-sm text-muted-foreground">Phone</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <div>
                <div className="font-medium">Bangalore, Karnataka</div>
                <div className="text-sm text-muted-foreground">Location</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="text-lg">Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications" className="flex items-center gap-3">
                <Bell className="w-4 h-4" />
                <div>
                  <div className="font-medium">Push Notifications</div>
                  <div className="text-sm text-muted-foreground">Get booking updates</div>
                </div>
              </Label>
              <Switch id="notifications" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="location" className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <div>
                  <div className="font-medium">Location Services</div>
                  <div className="text-sm text-muted-foreground">Find nearby properties</div>
                </div>
              </Label>
              <Switch id="location" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="marketing" className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <div>
                  <div className="font-medium">Marketing Emails</div>
                  <div className="text-sm text-muted-foreground">Special offers & deals</div>
                </div>
              </Label>
              <Switch id="marketing" />
            </div>
          </CardContent>
        </Card>

        {/* Menu Items */}
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{item.title}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">{item.description}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Host Program */}
        <Card className="mt-6 bg-gradient-to-r from-secondary/10 to-accent/10 border-secondary/20">
          <CardContent className="p-4 text-center">
            <h3 className="font-semibold text-lg mb-2">Become a Host</h3>
            <p className="text-sm text-muted-foreground mb-4">
              List your property and start earning with StayCall
            </p>
            <Button variant="secondary" className="w-full">
              Start Hosting
            </Button>
          </CardContent>
        </Card>

        {/* App Info */}
        <div className="mt-6 text-center space-y-2">
          <div className="text-sm text-muted-foreground">
            StayCall v2.1.0
          </div>
          <div className="flex justify-center gap-4 text-sm">
            <button className="text-primary hover:underline">Terms of Service</button>
            <button className="text-primary hover:underline">Privacy Policy</button>
          </div>
        </div>

        {/* Logout */}
        <div className="mt-6">
          <Button variant="outline" className="w-full text-destructive hover:text-destructive">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Account;