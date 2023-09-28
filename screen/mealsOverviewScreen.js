import { Text, View, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItems from "../components/MealItems";

export default function MealsOverviewScreen({route}) {
    const catId = route.params.categoryId;
    const displayMeals = MEALS.filter((items) => {
        return items?.categoryIds?.indexOf(catId) >=0;
    })

    const renderMealItem = (itemData) => {
        return (
            <View>
                <Text>
                    <MealItems title={itemData.item.title}/>
                </Text>
            </View>
        )
    }
  return (
    <View style={styles.container}>
        <FlatList 
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding:16
    }
})
