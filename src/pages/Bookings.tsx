import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Calendar, Phone, Star, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";

const Bookings = () => {
  const [activeTab, setActiveTab] = useState("current");

  const currentBookings = [
    {
      id: 1,
      title: "Cozy PG Room",
      location: "Koramangala, Bangalore",
      checkIn: "2024-01-15",
      checkOut: "2024-02-15",
      price: "₹12,000",
      status: "confirmed",
      rating: 4.8,
      bookingDate: "2024-01-10",
      propertyType: "PG"
    }
  ];

  const pastBookings = [
    {
      id: 2,
      title: "Modern 1BHK Apartment",
      location: "Whitefield, Bangalore",
      checkIn: "2023-12-01",
      checkOut: "2023-12-31",
      price: "₹18,000",
      status: "completed",
      rating: 4.6,
      bookingDate: "2023-11-25",
      propertyType: "Room",
      userRating: 5
    },
    {
      id: 3,
      title: "Beach Resort Villa",
      location: "Goa",
      checkIn: "2023-11-15",
      checkOut: "2023-11-18",
      price: "₹25,500",
      status: "completed",
      rating: 4.9,
      bookingDate: "2023-11-10",
      propertyType: "Resort",
      userRating: 4
    }
  ];

  const offers = [
    {
      id: 1,
      title: "Early Bird Discount",
      description: "Book 30 days in advance and get 15% off",
      discount: "15%",
      validTill: "2024-02-29",
      code: "EARLY15"
    },
    {
      id: 2,
      title: "Loyalty Reward",
      description: "You've unlocked 10% off on your next booking",
      discount: "10%",
      validTill: "2024-03-15",
      code: "LOYAL10"
    },
    {
      id: 3,
      title: "Weekend Special",
      description: "Weekend stays at resort properties",
      discount: "20%",
      validTill: "2024-02-15",
      code: "WEEKEND20"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="w-4 h-4 text-success" />;
      case "pending":
        return <AlertCircle className="w-4 h-4 text-accent" />;
      case "cancelled":
        return <XCircle className="w-4 h-4 text-destructive" />;
      case "completed":
        return <CheckCircle className="w-4 h-4 text-muted-foreground" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      confirmed: "bg-success/10 text-success",
      pending: "bg-accent/10 text-accent-foreground",
      cancelled: "bg-destructive/10 text-destructive",
      completed: "bg-muted text-muted-foreground"
    };
    
    return (
      <Badge className={variants[status as keyof typeof variants] || "bg-muted"}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const BookingCard = ({ booking, isPast = false }: { booking: any, isPast?: boolean }) => (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold">{booking.title}</h3>
              {getStatusIcon(booking.status)}
              {getStatusBadge(booking.status)}
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
              <MapPin className="w-4 h-4" />
              {booking.location}
            </div>
            <Badge variant="outline" className="text-xs mb-2">
              {booking.propertyType}
            </Badge>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-primary">{booking.price}</div>
            <div className="flex items-center gap-1 text-sm">
              <Star className="w-3 h-3 fill-accent text-accent" />
              <span>{booking.rating}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span>Check-in: {new Date(booking.checkIn).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span>Check-out: {new Date(booking.checkOut).toLocaleDateString()}</span>
          </div>
        </div>

        {isPast && booking.userRating && (
          <div className="mb-4 p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2 text-sm">
              <span>Your rating:</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`w-4 h-4 ${star <= booking.userRating ? 'fill-accent text-accent' : 'text-muted-foreground'}`} 
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Phone className="w-4 h-4 mr-2" />
            Contact Host
          </Button>
          {!isPast ? (
            <Button size="sm" className="flex-1">
              View Details
            </Button>
          ) : (
            <Button size="sm" className="flex-1">
              Book Again
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="pb-20">
      <div className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="current">Current</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
            <TabsTrigger value="offers">Offers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="current" className="mt-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Current Bookings</h2>
                <Button variant="outline" size="sm">
                  <Phone className="w-4 h-4 mr-2" />
                  Support
                </Button>
              </div>
              
              {currentBookings.length > 0 ? (
                currentBookings.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <div className="text-muted-foreground mb-4">
                      <Calendar className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>No current bookings</p>
                    </div>
                    <Button>Find Your Next Stay</Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="past" className="mt-4">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Past Bookings</h2>
              
              {pastBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} isPast={true} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="offers" className="mt-4">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Special Offers</h2>
              
              {offers.map((offer) => (
                <Card key={offer.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-accent/20 to-orange-100 p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{offer.title}</h3>
                        <Badge className="bg-accent text-accent-foreground">
                          {offer.discount} OFF
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {offer.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          Valid till: {new Date(offer.validTill).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-2">
                          <code className="bg-background px-2 py-1 rounded text-sm font-mono">
                            {offer.code}
                          </code>
                          <Button size="sm">
                            Use Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {/* Referral Program */}
              <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🎁 Referral Program
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Refer friends and get ₹500 credit for each successful booking
                  </p>
                  <Button className="w-full">
                    Share Referral Code
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Emergency Support */}
      <div className="p-4">
        <Card className="bg-destructive/5 border-destructive/20">
          <CardContent className="p-4 text-center">
            <div className="text-destructive mb-2">
              <AlertCircle className="w-6 h-6 mx-auto" />
            </div>
            <h3 className="font-semibold mb-1">Need Emergency Help?</h3>
            <p className="text-sm text-muted-foreground mb-3">
              24/7 support for urgent issues during your stay
            </p>
            <Button variant="destructive" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Emergency Support
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Bookings;