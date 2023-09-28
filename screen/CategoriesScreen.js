import { FlatList, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoriesGridTile from "../components/CategoriesGridTile";

function CategoriesScreen({navigation}) {
    function renderCategoryItem(itemData){

        function pressHanlder(){
            navigation.navigate("MealsOverview",{
                categoryId: itemData.item.id
            })
        }
    
        return(
            <CategoriesGridTile 
            title={itemData.item.title} 
            color={itemData.item.color}
            onPress={pressHanlder}
            />
        )
    }
    return (
        <FlatList 
        data={CATEGORIES} 
        keyExtractor={(item) => item.id} 
        renderItem={renderCategoryItem}
        numColumns={2}
        />
    )
}

export default CategoriesScreen;
