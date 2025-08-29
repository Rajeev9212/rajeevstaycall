import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Phone, Users, Clock, Wifi } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const promotionalOffers = [
    {
      title: "🎉 First Booking 20% Off",
      description: "Use code WELCOME20 for your first stay",
      gradient: "from-accent to-orange-400"
    },
    {
      title: "📞 Call Support Available",
      description: "24/7 multilingual assistance",
      gradient: "from-primary to-blue-500"
    },
    {
      title: "✅ Verified Listings Only",
      description: "Safe and trusted accommodations",
      gradient: "from-secondary to-green-500"
    }
  ];

  const featuredListings = [
    {
      id: 1,
      title: "Cozy PG Near Metro",
      location: "Koramangala, Bangalore",
      price: "₹8,000/month",
      rating: 4.8,
      type: "PG",
      amenities: ["WiFi", "Meals", "AC"]
    },
    {
      id: 2,
      title: "Luxury 2BHK Apartment",
      location: "Bandra, Mumbai",
      price: "₹25,000/month",
      rating: 4.9,
      type: "Home Rental",
      amenities: ["Furnished", "Parking", "Gym"]
    },
    {
      id: 3,
      title: "Beach Resort Stay",
      location: "Goa",
      price: "₹3,500/night",
      rating: 4.7,
      type: "Resort",
      amenities: ["Pool", "Beach", "Spa"]
    }
  ];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={heroImage} 
          alt="StayCall Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white p-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Find Your Perfect Stay</h2>
            <p className="text-lg mb-6 opacity-90">Rooms • PGs • Homes • Resorts</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                variant="gradient" 
                size="lg"
                onClick={() => navigate("/search")}
                className="font-semibold"
              >
                Start Searching
              </Button>
              <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                <Phone className="w-4 h-4 mr-2" />
                Call for Help
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Promotional Offers */}
      <div className="p-4 space-y-4">
        <h3 className="text-xl font-semibold">🔥 Special Offers</h3>
        <div className="grid gap-3">
          {promotionalOffers.map((offer, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className={`bg-gradient-to-r ${offer.gradient} p-4 text-white`}>
                  <h4 className="font-semibold text-lg">{offer.title}</h4>
                  <p className="text-sm opacity-90">{offer.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Categories */}
      <div className="p-4 space-y-4">
        <h3 className="text-xl font-semibold">Browse by Category</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "Rooms", icon: "🏠", count: "2.5K+" },
            { name: "PGs", icon: "🏢", count: "1.8K+" },
            { name: "Home Rentals", icon: "🏡", count: "950+" },
            { name: "Resorts", icon: "🌴", count: "340+" }
          ].map((category) => (
            <Card key={category.name} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h4 className="font-semibold">{category.name}</h4>
                <p className="text-sm text-muted-foreground">{category.count} listings</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Listings */}
      <div className="p-4 space-y-4">
        <h3 className="text-xl font-semibold">Featured Listings</h3>
        <div className="space-y-4">
          {featuredListings.map((listing) => (
            <Card key={listing.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{listing.title}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {listing.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4" />
                      {listing.location}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="text-sm font-medium">{listing.rating}</span>
                      </div>
                      <div className="text-lg font-bold text-primary">
                        {listing.price}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {listing.amenities.map((amenity) => (
                    <Badge key={amenity} variant="outline" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call Support Banner */}
      <div className="p-4">
        <Card className="bg-gradient-to-r from-accent/20 to-orange-100 border-accent/30">
          <CardContent className="p-6 text-center">
            <div className="mb-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Need Help Finding a Place?</h3>
              <p className="text-muted-foreground mb-4">
                Our multilingual support team is here to help you find the perfect stay
              </p>
            </div>
            <Button variant="call" size="lg" className="w-full sm:w-auto">
              <Phone className="w-4 h-4 mr-2" />
              Call Now: 1800-STAY-CALL
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;