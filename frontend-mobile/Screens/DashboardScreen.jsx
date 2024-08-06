// import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
// import React, { useState } from "react";
// import { useCustomFonts } from "../fonts/useCustomFont";
// import AppLoading from "expo-app-loading";
// import { BarChart, PieChart } from "react-native-chart-kit";
// import DashCard from "../Components/DashCard";
// import Carousel from "react-native-reanimated-carousel"; // Import Carousel
// import PaginationDots from "../Components/PaginationDots"; // Import PaginationDots

// const screenWidth = Dimensions.get("window").width;

// const cardData = [
//   {
//     id: "1",
//     title: "Balance",
//     balance: 3000,
//     icon: "wallet-outline",
//     type: "balance",
//   },
//   {
//     id: "2",
//     title: "Income",
//     balance: 5000,
//     icon: "cash-plus",
//     type: "income",
//   },
//   {
//     id: "3",
//     title: "Expense",
//     balance: 2000,
//     icon: "cash-minus",
//     type: "expense",
//   },
// ];

// const expenseCategories = [
//   { categoryName: "Food", categoryId: 1 },
//   { categoryName: "Travel", categoryId: 2 },
// ];

// const recentTransactions = [
//   { amount: "400", remark: "Jeans Pant", color: "red" },
//   { amount: "1500", remark: "Salary", color: "green" },
//   { amount: "200", remark: "Groceries", color: "red" },
// ];

// const barData = {
//   labels: ["Page A", "Page B", "Page C", "Page D"],
//   datasets: [
//     {
//       data: [4000, 3000, 2390, 3490],
//     },
//   ],
// };

// const pieData = [
//   {
//     name: "Expense",
//     population: 215,
//     color: "#f00",
//     legendFontColor: "#000",
//     legendFontSize: 15,
//   },
//   {
//     name: "Income",
//     population: 280,
//     color: "#0f0",
//     legendFontColor: "#000",
//     legendFontSize: 15,
//   },
//   {
//     name: "Balance",
//     population: 525,
//     color: "#00f",
//     legendFontColor: "#000",
//     legendFontSize: 15,
//   },
// ];

// const chartConfig = {
//   backgroundGradientFrom: "#ffffff",
//   backgroundGradientFromOpacity: 0,
//   backgroundGradientTo: "#ffffff",
//   backgroundGradientToOpacity: 0,
//   color: (opacity = 1) => `rgba(75, 192, 192, ${opacity})`,
//   labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//   barPercentage: 0.7,
//   useShadowColorFromDataset: false,
//   decimalPlaces: 0,
//   style: {
//     borderRadius: 16,
//     fontFamily: "merriweather-regular",
//   },
//   fillShadowGradient: "#3FCA89",
//   fillShadowGradientOpacity: 1,
// };

// const DashboardScreen = () => {
//   const [fontsLoaded] = useCustomFonts();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   if (!fontsLoaded) {
//     return <AppLoading />;
//   }

//   const handleSnapToItem = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <ScrollView style={styles.scrollView}>
//       <View style={styles.container}>
//         <View style={styles.carouselContainer}>
//           <Carousel
//             loop
//             autoPlay
//             autoPlayInterval={3000}
//             width={screenWidth}
//             height={150} // Adjust the height as needed
//             data={cardData}
//             layout="parallax-horizontal"
//             renderItem={({ item }) => (
//               <DashCard
//                 title={item.title}
//                 balance={item.balance}
//                 icon={item.icon}
//                 style={styles.dashCard}
//               />
//             )}
//             onSnapToItem={handleSnapToItem}
//           />
//           <PaginationDots currentIndex={currentIndex} data={cardData} />
//         </View>
//         <View style={styles.additionalCardsContainer}>
//           <View style={styles.additionalCard}>
//             <ScrollView
//               contentContainerStyle={styles.additionalCardContent}
//               showsVerticalScrollIndicator={false}
//             >
//               <Text style={styles.cardTitle}>Expense Categories</Text>
//               <View style={styles.badgesContainer}>
//                 {expenseCategories.map((category, index) => (
//                   <View key={index} style={styles.badge}>
//                     <Text style={styles.badgeText}>
//                       {category.categoryName}
//                     </Text>
//                   </View>
//                 ))}
//               </View>
//             </ScrollView>
//           </View>
//           <View style={styles.additionalCard}>
//             <ScrollView
//               contentContainerStyle={styles.additionalCardContent}
//               showsVerticalScrollIndicator={false}
//             >
//               <Text style={styles.cardTitle}>Recent Transactions</Text>
//               {recentTransactions.map((transaction, index) => (
//                 <View key={index} style={styles.transactionItem}>
//                   <Text
//                     style={[
//                       styles.transactionText,
//                       { color: transaction.color },
//                     ]}
//                   >
//                     ₹{transaction.amount} -
//                     <Text style={{ color: "#012970" }}>
//                       {transaction.remark}
//                     </Text>
//                   </Text>
//                 </View>
//               ))}
//             </ScrollView>
//           </View>
//         </View>
//         <View style={styles.chartCard}>
//           <Text style={styles.chartTitle}>Monthly Expenses</Text>
//           <BarChart
//             style={styles.graphStyle}
//             data={barData}
//             width={screenWidth - 64}
//             height={220}
//             yAxisLabel=""
//             chartConfig={chartConfig}
//             verticalLabelRotation={0}
//           />
//         </View>
//         <View style={styles.chartCard}>
//           <Text style={styles.chartTitle}>Expense Breakdown</Text>
//           <PieChart
//             data={pieData}
//             width={screenWidth - 64}
//             height={210}
//             chartConfig={chartConfig}
//             accessor="population"
//             backgroundColor="transparent"
//             paddingLeft="15"
//             center={[10, 5]}
//             absolute
//           />
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default DashboardScreen;

// const styles = StyleSheet.create({
//   scrollView: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   container: {
//     padding: 16,
//   },
//   carouselContainer: {
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   additionalCardsContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 20,
//   },
//   additionalCard: {
//     width: "48%",
//     minHeight: 210,
//     maxHeight: 210,
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     elevation: 3,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     padding: 10,
//     margin: 5,
//   },
//   additionalCardContent: {
//     paddingVertical: 10,
//   },
//   cardTitle: {
//     fontSize: 14,
//     marginBottom: 10,
//     fontFamily: "merriweather-bold",
//   },
//   cardBody: {
//     fontSize: 14,
//     textAlign: "center",
//     color: "lightgray",
//     fontFamily: "merriweather-regular",
//   },
//   chartCard: {
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     elevation: 3,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     padding: 16,
//     marginVertical: 8,
//   },
//   graphStyle: {
//     marginVertical: 8,
//     borderRadius: 16,
//   },
//   chartTitle: {
//     fontSize: 16,
//     fontFamily: "merriweather-bold",
//     marginBottom: 8,
//     textAlign: "left",
//   },
//   dashCard: {
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   badgesContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   badge: {
//     backgroundColor: "#fff",
//     borderWidth: 0.8,
//     borderColor: "#012970",
//     padding: 7,
//     borderRadius: 8,
//     margin: 4,
//   },
//   badgeText: {
//     fontSize: 10,
//     fontFamily: "merriweather-regular",
//   },
//   transactionItem: {
//     marginVertical: 5,
//   },
//   transactionText: {
//     fontSize: 12,
//     fontFamily: "merriweather-regular",
//   },
// });

import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import React, { useState } from "react";
import { useCustomFonts } from "../fonts/useCustomFont";
import AppLoading from "expo-app-loading";
import { BarChart, PieChart } from "react-native-chart-kit";
import DashCard from "../Components/DashCard";
import Carousel from "react-native-reanimated-carousel"; // Import Carousel
import PaginationDots from "../Components/PaginationDots"; // Import PaginationDots
import { MaterialCommunityIcons } from "react-native-vector-icons"; // Import Icons
import Feather from "@expo/vector-icons/Feather";

const screenWidth = Dimensions.get("window").width;

const cardData = [
  {
    id: "1",
    title: "Balance",
    balance: 3000,
    icon: "wallet-outline",
    type: "balance",
  },
  {
    id: "2",
    title: "Income",
    balance: 5000,
    icon: "cash-plus",
    type: "income",
  },
  {
    id: "3",
    title: "Expense",
    balance: 2000,
    icon: "cash-minus",
    type: "expense",
  },
];

const expenseCategories = [
  { categoryName: "Food", categoryId: 1 },
  { categoryName: "Travel", categoryId: 2 },
];

const recentTransactions = [
  { amount: "400", remark: "Jeans Pant", color: "red", type: "expense" },
  { amount: "1500", remark: "Salary", color: "green", type: "income" },
  { amount: "200", remark: "Groceries", color: "red", type: "expense" },
];

const barData = {
  labels: ["Page A", "Page B", "Page C", "Page D"],
  datasets: [
    {
      data: [4000, 3000, 2390, 3490],
    },
  ],
};

const pieData = [
  {
    name: "Expense",
    population: 215,
    color: "#f00",
    legendFontColor: "#000",
    legendFontSize: 15,
  },
  {
    name: "Income",
    population: 280,
    color: "#0f0",
    legendFontColor: "#000",
    legendFontSize: 15,
  },
  {
    name: "Balance",
    population: 525,
    color: "#00f",
    legendFontColor: "#000",
    legendFontSize: 15,
  },
];

const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#ffffff",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(75, 192, 192, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  barPercentage: 0.7,
  useShadowColorFromDataset: false,
  decimalPlaces: 0,
  style: {
    borderRadius: 16,
    fontFamily: "merriweather-regular",
  },
  fillShadowGradient: "#3FCA89",
  fillShadowGradientOpacity: 1,
};

const DashboardScreen = () => {
  const [fontsLoaded] = useCustomFonts();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleSnapToItem = (index) => {
    setCurrentIndex(index);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.carouselContainer}>
          <Carousel
            loop
            autoPlay
            autoPlayInterval={3000}
            width={screenWidth}
            height={150} // Adjust the height as needed
            data={cardData}
            layout="parallax-horizontal"
            renderItem={({ item }) => (
              <DashCard
                title={item.title}
                balance={item.balance}
                icon={item.icon}
                style={styles.dashCard}
              />
            )}
            onSnapToItem={handleSnapToItem}
          />
          <PaginationDots currentIndex={currentIndex} data={cardData} />
        </View>
        <View style={styles.additionalCardsContainer}>
          <View style={styles.additionalCard}>
            <ScrollView
              contentContainerStyle={styles.additionalCardContent}
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.cardTitle}>Expense Categories</Text>
              <View style={styles.badgesContainer}>
                {expenseCategories.map((category, index) => (
                  <View key={index} style={styles.badge}>
                    <Text style={styles.badgeText}>
                      {category.categoryName}
                    </Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
          <View style={styles.additionalCard}>
            <ScrollView
              contentContainerStyle={styles.additionalCardContent}
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.cardTitle}>Recent Transactions</Text>
              {recentTransactions.map((transaction, index) => (
                <View key={index} style={styles.transactionItem}>
                  <Feather
                    name={
                      transaction.type === "income"
                        ? "arrow-down-left"
                        : "arrow-up-right"
                    }
                    size={20}
                    color={transaction.type === "income" ? "green" : "red"}
                    style={styles.transactionIcon}
                  />
                  <Text style={[styles.transactionText]}>
                    ₹{transaction.amount} -
                    <Text style={{ color: "#012970" }}>
                      {transaction.remark}
                    </Text>
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={styles.chartCard}>
          <Text style={styles.chartTitle}>Monthly Expenses</Text>
          <BarChart
            style={styles.graphStyle}
            data={barData}
            width={screenWidth - 64}
            height={220}
            yAxisLabel=""
            chartConfig={chartConfig}
            verticalLabelRotation={0}
          />
        </View>
        <View style={styles.chartCard}>
          <Text style={styles.chartTitle}>Expense Breakdown</Text>
          <PieChart
            data={pieData}
            width={screenWidth - 64}
            height={210}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            center={[10, 5]}
            absolute
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    padding: 16,
  },
  carouselContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  additionalCardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  additionalCard: {
    width: "48%",
    minHeight: 210,
    maxHeight: 210,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 10,
    margin: 5,
  },
  additionalCardContent: {
    paddingVertical: 10,
  },
  cardTitle: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: "merriweather-bold",
  },
  cardBody: {
    fontSize: 14,
    textAlign: "center",
    color: "lightgray",
    fontFamily: "merriweather-regular",
  },
  chartCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 16,
    marginVertical: 8,
  },
  graphStyle: {
    marginVertical: 8,
    borderRadius: 16,
  },
  chartTitle: {
    fontSize: 16,
    fontFamily: "merriweather-bold",
    marginBottom: 8,
    textAlign: "left",
  },
  dashCard: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  transactionIcon: {
    marginRight: 8,
  },
  transactionText: {
    fontFamily: "merriweather-regular",
  },
  badgesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  badge: {
    backgroundColor: "#fff",
    borderWidth: 0.8,
    borderColor: "#012970",
    padding: 7,
    borderRadius: 8,
    margin: 4,
  },
  badgeText: {
    fontSize: 10,
    fontFamily: "merriweather-regular",
  },
});
