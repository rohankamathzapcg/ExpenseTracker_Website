import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useCustomFonts } from "../fonts/useCustomFont";
import AppLoading from "expo-app-loading";
import AddCategoryModal from "../Components/AddCategoryModal";

const CategoriesScreen = ({ navigation }) => {
  const [fontsLoaded] = useCustomFonts();
  const [myCategory, setMyCategory] = useState([]);
  const [categories, setCategories] = useState([
    { categoryName: "Food", categoryId: 1 },
    { categoryName: "Travel", categoryId: 2 },
    { categoryName: "Shopping", categoryId: 3 },
  ]);
  const [modalVisible, setModalVisible] = useState(false);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const isSelected = (categoryName) =>
    myCategory.some((cat) => cat.catName === categoryName);

  const handleCategoryClick = (categoryName) => {
    if (!isSelected(categoryName)) {
      setMyCategory([...myCategory, { catName: categoryName }]);
    }
  };

  const addCategory = (newCategoryName) => {
    const newCategory = {
      categoryName: newCategoryName,
      categoryId: categories.length + 1,
    };
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  };

  const handleSaveChanges = () => {
    // Code to save changes (e.g., API call) would go here
    console.log("Categories saved:", myCategory);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.categoryContainer}>
        <Text style={styles.sectionTitle}>Standard Categories</Text>
        <View style={styles.badgesContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.badge,
                isSelected(category.categoryName) && styles.selectedBadge,
              ]}
              onPress={() => handleCategoryClick(category.categoryName)}
            >
              <Text
                style={[
                  styles.badgeText,
                  isSelected(category.categoryName) && styles.selectedBadgeText,
                ]}
              >
                {category.categoryName}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      {myCategory.length > 0 && (
        <View style={styles.myCategoryContainer}>
          <Text style={styles.sectionTitle}>My Categories</Text>
          <View style={styles.badgesContainer}>
            {myCategory.map((category, index) => (
              <View key={index} style={styles.myBadge}>
                <Text style={styles.MybadgeText}>{category.catName}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSaveChanges}
          >
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      )}
      <AddCategoryModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddCategory={addCategory}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexGrow: 1,
    padding: 16,
  },
  categoryContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 15,
    fontFamily: "merriweather-bold",
    marginBottom: 8,
  },
  badgesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  badge: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#012970",
    padding: 10,
    borderRadius: 8,
    margin: 4,
  },
  selectedBadge: {
    backgroundColor: "#CDC7C7",

    borderColor: "#A09C9C",
  },
  selectedBadgeText: {
    fontSize: 14,
    color: "#868181",
    fontFamily: "merriweather-regular",
  },
  badgeText: {
    fontSize: 14,
    fontFamily: "merriweather-regular",
  },
  MybadgeText: {
    fontSize: 14,
    color: "#fff",
    fontFamily: "merriweather-regular",
  },
  addButton: {
    backgroundColor: "#012970",
    borderRadius: 8,
    margin: 4,
    width: 35,
    maxHeight: 40,
    alignContent: "center",
    justifyContent: "center",
  },
  addButtonText: {
    marginLeft: 10,
    color: "white",
    fontSize: 24,
  },
  myCategoryContainer: {
    marginTop: 24,
  },
  myBadge: {
    backgroundColor: "#012970",
    padding: 10,
    borderRadius: 8,
    margin: 4,
  },
  saveButton: {
    borderWidth: 0.9,
    borderColor: "#012970",
    backgroundColor: "#fff",
    width: "45%",
    height: 45,
    padding: 10,
    borderRadius: 8,
    marginTop: 16,
    marginHorizontal: 100,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#012970",
    fontSize: 14,
    fontFamily: "merriweather-regular",
  },
});

export default CategoriesScreen;
