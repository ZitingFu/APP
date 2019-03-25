import axios from 'axios'
//获取emoji头像(本地json只能放在static文件夹里) 

let base = 'http://jsonplaceholder.typicode.com';

export const requestLogin = params => { return axios.get(`${base}/posts/1/comments`, params).then(res => res.data); };
export const batchRemoveUser = params => { return axios.get(`${base}/posts/1/comments`, { params: params }); };

//export function getEmojiData() {
//return axios({
//    method: 'get',
//    url: '/static/emojiDB.json',
//  })
//  .then(function(res) {
//    return Promise.resolve(res.data);
//  });
//}