// create an object literal for the properties of twitter post which includes username,content,likes,reposts,tags 


const post = {
  username: 'Rupjyoti239',
  content: "this is the content",
  likes: 99,
  reposts: 15,
  tags: ["@webdevelopment", "@javascript"]
};

console.log(post['username']);
console.log(post.content);
console.log(post['likes']);
console.log(post['reposts']);
console.log(post['tags']);
console.log(post['tags'][0]);