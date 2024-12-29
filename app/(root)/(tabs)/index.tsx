import { logout } from "@/lib/appwrite";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold my-10 text-3xl font-rubik">Welcome to Restate</Text>
     
      
    </View>
  );
}
