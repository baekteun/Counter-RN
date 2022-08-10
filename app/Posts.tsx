import axios from "axios";
import React, { useCallback, useEffect, useState } from "react"
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native"


interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

const Posts = () => {

  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    } catch(e) {
      console.log(e);
    }
    
  }

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={fetchPosts}>
        <Text 
          style={{
            marginTop: 20,
            textAlign: "center",
            fontSize: 24,
          }}
        >Fetch Todo list</Text>
      </TouchableOpacity>
      <FlatList
        data={posts}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>UserID : {item.userId}</Text>
              <Text>PostID : {item.id}</Text>
              <Text>Title : {item.title}</Text>
              <Text>Body : {item.body}</Text>
            </View>
          );
        }}
        style={{
          flex: 1
        }}
      />
    </SafeAreaView>    
  );
};

export default Posts;