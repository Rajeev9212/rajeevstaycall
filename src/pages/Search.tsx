import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Star, Phone, Filter, Map, List, SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Search = () => {
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [priceRange, setPriceRange] = useState([5000, 25000]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const searchResults = [
    {
      id: 1,
      title: "Modern PG with Meals",
      location: "HSR Layout, Bangalore",
      price: "₹12,000/month",
      originalPrice: "₹15,000/month",
      rating: 4.8,
      reviews: 156,
      type: "PG",
      amenities: ["WiFi", "Meals", "AC", "Laundry"],
      distance: "2.5 km from Metro",
      verified: true,
      discount: "20% OFF"
    },
    {
      id: 2,
      title: "Spacious 1BHK Apartment",
      location: "Whitefield, Bangalore",
      price: "₹18,000/month",
      rating: 4.6,
      reviews: 89,
      type: "Room",
      amenities: ["Furnished", "WiFi", "Parking", "Security"],
      distance: "1.2 km from IT Park",
      verified: true
    },
    {
      id: 3,
      title: "Luxury Villa for Groups",
      location: "Lonavala, Maharashtra",
      price: "₹8,500/night",
      rating: 4.9,
      reviews: 234,
      type: "Resort",
      amenities: ["Pool", "Garden", "BBQ", "WiFi"],
      distance: "Beach view",
      verified: true
    }
  ];

  const amenitiesList = [
    "WiFi", "AC", "Meals", "Laundry", "Parking", "Security", "Furnished", 
    "Gym", "Swimming Pool", "Garden", "Balcony", "Kitchen Access"
  ];

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    if (checked) {
      setSelectedAmenities([...selectedAmenities, amenity]);
    } else {
      setSelectedAmenities(selectedAmenities.filter(a => a !== amenity));
    }
  };

  const FilterSheet = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[80vh]">
        <SheetHeader>
          <SheetTitle>Filter Your Search</SheetTitle>
          <SheetDescription>
            Customize your search to find the perfect stay
          </SheetDescription>
        </SheetHeader>
        
        <div className="py-6 space-y-6">
          {/* Price Range */}
          <div>
            <Label className="text-base font-semibold">Price Range</Label>
            <div className="mt-2">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={50000}
                min={1000}
                step={1000}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-1">
                <span>₹{priceRange[0].toLocaleString()}</span>
                <span>₹{priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Property Type */}
          <div>
            <Label className="text-base font-semibold">Property Type</Label>
            <Select>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="room">Rooms</SelectItem>
                <SelectItem value="pg">PG</SelectItem>
                <SelectItem value="home">Home Rental</SelectItem>
                <SelectItem value="resort">Resort</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Duration */}
          <div>
            <Label className="text-base font-semibold">Stay Duration</Label>
            <Select>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Group Size */}
          <div>
            <Label className="text-base font-semibold">Group Size</Label>
            <Select>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Number of people" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Person</SelectItem>
                <SelectItem value="2">2 People</SelectItem>
                <SelectItem value="3-4">3-4 People</SelectItem>
                <SelectItem value="5+">5+ People</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Amenities */}
          <div>
            <Label className="text-base font-semibold">Amenities</Label>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {amenitiesList.map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox
                    id={amenity}
                    checked={selectedAmenities.includes(amenity)}
                    onCheckedChange={(checked) => handleAmenityChange(amenity, !!checked)}
                  />
                  <Label htmlFor={amenity} className="text-sm">{amenity}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button className="flex-1">Apply Filters</Button>
            <Button variant="outline" onClick={() => {
              setPriceRange([5000, 25000]);
              setSelectedAmenities([]);
            }}>
              Clear All
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <div className="pb-20">
      {/* Search Header */}
      <div className="p-4 space-y-4 bg-muted/30">
        <div className="space-y-3">
          <div>
            <Label htmlFor="location">Where do you want to stay?</Label>
            <Input 
              id="location"
              placeholder="City, area, or landmark"
              className="mt-1"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="checkin">Check-in</Label>
              <Input 
                id="checkin"
                type="date"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="checkout">Check-out</Label>
              <Input 
                id="checkout"
                type="date"
                className="mt-1"
              />
            </div>
          </div>
        </div>

        <Button className="w-full" size="lg">
          Search Properties
        </Button>
      </div>

      {/* Filter & View Options */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FilterSheet />
            <Button variant="outline" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Call for Help
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
            >
              <List className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "map" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("map")}
            >
              <Map className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="p-4 pb-2">
        <p className="text-sm text-muted-foreground">
          Found {searchResults.length} properties • Sorted by relevance
        </p>
      </div>

      {/* Search Results */}
      <div className="p-4 space-y-4">
        {searchResults.map((property) => (
          <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{property.title}</h3>
                    {property.verified && (
                      <Badge variant="secondary" className="text-xs bg-success/10 text-success">
                        ✓ Verified
                      </Badge>
                    )}
                    {property.discount && (
                      <Badge className="text-xs bg-accent text-accent-foreground">
                        {property.discount}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{property.location}</span>
                    <span>•</span>
                    <span>{property.distance}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{property.rating}</span>
                      <span className="text-xs text-muted-foreground">({property.reviews} reviews)</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {property.type}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {property.amenities.slice(0, 4).map((amenity) => (
                  <Badge key={amenity} variant="outline" className="text-xs">
                    {amenity}
                  </Badge>
                ))}
                {property.amenities.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{property.amenities.length - 4} more
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-right">
                  {property.originalPrice && (
                    <div className="text-sm text-muted-foreground line-through">
                      {property.originalPrice}
                    </div>
                  )}
                  <div className="text-xl font-bold text-primary">
                    {property.price}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="p-4">
        <Button variant="outline" className="w-full">
          Load More Properties
        </Button>
      </div>

      {/* Call Support */}
      <div className="p-4">
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="p-4 text-center">
            <h3 className="font-semibold mb-2">Can't find what you're looking for?</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Our expert team can help you find the perfect property
            </p>
            <Button variant="call" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Get Personal Assistance
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Search;