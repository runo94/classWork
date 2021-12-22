'use strict';

///////////////////////////////////////////////////
const URI = 'http://imtles.noodless.co.ua';
const PER_PAGE = 5;

// login: admin
// pass: itx85A!f^&07SGM!$Z

async function getPosts(page = 1) {

  const postsDiv = document.getElementById('posts');
  postsDiv.innerText = '';

  // запрашиваем JSON постов
  const posts_response = await fetch(`${URI}` + '/wp-json/wp/v2/posts' + `?per_page=${PER_PAGE}` + `&page=${page}`); // http://imtles.noodless.co.ua/wp-json/wp/v2/posts?per_page=2&page=1
  const posts_data = await posts_response.json();


  async function getImage(id) {


    const img_response = await fetch(`${URI}` + '/wp-json/wp/v2/media/' + `${id}`); // http://imtles.noodless.co.ua/wp-json/wp/v2/media/7
    const img_data = await img_response.json();

    // console.log(img_data)

    return img_data;
  }

  posts_data.map(async (postItem) => {

    const placeholder = {
      'media_details': {
        'sizes': {
          'thumbnail': {
            'source_url': './img/avatar.jpg'
          }
        }
      }
    }

    const image = postItem.featured_media ? await getImage(postItem.featured_media) : placeholder;

    const post = document.createElement('div');
    const postTitle = document.createElement('h2');
    postTitle.innerHTML = postItem.title.rendered;

    // const postImage = document.createElement('img');
    // postImage.setAttribute('src', `${image.media_details.sizes.thumbnail.source_url}`);
    const date = new Date(postItem.date);

    const postText = document.createElement('p');
    postText.innerHTML = postItem.content.rendered;
    const postDate = document.createElement('p');
    postDate.innerHTML = `${date.getDate()}. ${date.getMonth() + 1}. ${date.getFullYear()}`;

    const postImage = document.createElement('img');
    postImage.setAttribute('src', `${image.media_details.sizes.thumbnail.source_url}`);
    post.appendChild(postImage);

    postsDiv.appendChild(post);
    post.appendChild(postTitle);
    post.appendChild(postText);
    post.appendChild(postDate);

    return postsDiv;
  })

  return posts_data;
}

getPosts();