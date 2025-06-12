"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  // Rocket,
  Package,
  DollarSign,
  BarChart,
  // Edit,
  MessageSquare,
  Bell,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const UserDashboard = () => {
  const routes = useRouter();
  const shopStats = {
    totalSales: 1245,
    activeProducts: 28,
    pendingOrders: 12,
    totalRevenue: 45280,
  };

  const recentProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      image:
        "https://cdn.kd1.io/nexus/product/114-1718649000-nexus2.png?width=800&height=800&mode=fill&fill=solid&fill-color=FFFFFF",
      price: 199.99,
      stock: 15,
      sales: 45,
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 149.99,
      stock: 22,
      sales: 32,
      image:
        "https://m.media-amazon.com/images/I/51MB+kF8RYL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      stock: 56,
      sales: 89,
      image:
        "https://allmade.com/cdn/shop/files/unisex-organic-cotton-tee-734095_900x.jpg?v=1722956768",
    },
  ];

  const recentReviews = [
    {
      id: 1,
      product: "Wireless Headphones",
      rating: 4.5,
      comment: "Excellent sound quality!",
    },
    {
      id: 2,
      product: "Smart Fitness Watch",
      rating: 5,
      comment: "Best fitness tracker I've owned",
    },
  ];

  const salesData = [
    { day: "Mon", sales: 1200 },
    { day: "Tue", sales: 2100 },
    { day: "Wed", sales: 800 },
    { day: "Thu", sales: 1600 },
    { day: "Fri", sales: 2450 },
    { day: "Sat", sales: 1800 },
    { day: "Sun", sales: 1900 },
  ];

  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900 p-6 md:p-10">
      {/* Shop Header */}
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome to Your Selling Hub
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Grow your business with SwiftCart - Your products reached 15,234
            customers last month!
          </p>
        </div>
        {/* <Button className="gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
          <Rocket className="w-5 h-5" />
          Boost Your Sales
        </Button> */}
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          {
            title: "Total Sales",
            value: shopStats.totalSales,
            icon: (
              <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
            ),
            bg: "bg-green-100 dark:bg-green-900/30",
          },
          {
            title: "Active Products",
            value: shopStats.activeProducts,
            icon: (
              <Package className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            ),
            bg: "bg-blue-100 dark:bg-blue-900/30",
          },
          {
            title: "Pending Orders",
            value: shopStats.pendingOrders,
            icon: (
              <BarChart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            ),
            bg: "bg-purple-100 dark:bg-purple-900/30",
          },
          {
            title: "Total Revenue",
            value: `$${shopStats.totalRevenue.toLocaleString()}`,
            icon: (
              <DollarSign className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            ),
            bg: "bg-orange-100 dark:bg-orange-900/30",
          },
        ].map((item, i) => (
          <Card key={i} className="bg-white dark:bg-gray-800">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                {/* <div className={`${item.bg} p-3 rounded-full`}>{item.icon}</div> */}
                <div className={`${item.bg} p-3 rounded-full`}>{item.icon}</div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">
                    {item.title}
                  </p>
                  {/* <p className="text-gray-500 dark:text-gray-400">
                    {item.title}
                  </p> */}
                  <p className="text-2xl font-bold">{item.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Sales Chart */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <BarChart className="w-6 h-6" />
                Sales Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ReBarChart data={salesData}>
                  <XAxis dataKey="day" stroke="#1c799b" fontSize={12} />
                  <YAxis stroke="#1c799b" fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#1c799b" radius={[4, 4, 0, 0]} />
                </ReBarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Product Highlights */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <Package className="w-6 h-6" />
                Product Highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {recentProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-4 group"
                  >
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                      <Image
                        src={product?.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{product.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <p>${product.price}</p>
                        <p>Stock: {product.stock}</p>
                        <p>Sales: {product.sales}</p>
                      </div>
                    </div>
                    {/* <Button variant="outline" size="sm" className="gap-2">
                      <Edit className="w-4 h-4" />
                      Edit
                    </Button> */}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Quick Actions */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="p-6 grid grid-cols-2 gap-4">
              <Button
                onClick={() => routes.push("/user/shop/products/add-product")}
                variant="outline"
                className="h-24 flex-col gap-2"
              >
                <Package className="w-6 h-6" />
                Add New Product
              </Button>
              <Button variant="outline" className="h-24 flex-col gap-2">
                <DollarSign className="w-6 h-6" />
                View Orders
              </Button>
              <Button variant="outline" className="h-24 flex-col gap-2">
                <BarChart className="w-6 h-6" />
                View Analytics
              </Button>
              <Button variant="outline" className="h-24 flex-col gap-2">
                <MessageSquare className="w-6 h-6" />
                Customer Messages
              </Button>
            </CardContent>
          </Card>

          {/* Recent Reviews */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle>Recent Reviews</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {recentReviews.map((review) => (
                <div key={review.id} className="group">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <h4 className="font-medium">{review.product}</h4>
                      <div className="flex items-center gap-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(review.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {review.comment}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100"
                    >
                      Respond
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Shop Announcements */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-6 h-6" />
                Announcements
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <h4 className="font-medium mb-1">New Feature!</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Try our new AI-powered product description generator
                </p>
              </div>
              <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <h4 className="font-medium mb-1">Seller Tip</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Add at least 5 product photos to increase conversion by 40%
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
