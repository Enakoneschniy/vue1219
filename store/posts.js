export const state = () => ({
  posts: [],
  post: null
})

export const actions = {
  async loadPost ({ commit }, id) {
    try {
      const post = await this.$axios.$get(`/posts/${id}`, {
        params: {
          _embed: 'comments',
          _expand: 'user'
        }
      })
      commit('setPost', post)
    } catch (e) {
      console.log(e)
    }
  },
  async loadPosts ({ commit }) {
    try {
      const posts = await this.$axios.$get('/posts', {
        params: {
          _embed: 'comments',
          _expand: 'user'
        }
      })
      commit('setPosts', posts)
    } catch (e) {
      console.log(e)
    }
  },
  async addComment ({ dispatch }, comment) {
    await this.$axios.$post('/comments', comment) // { text: '', postId: 1 }
    dispatch('loadPost', comment.postId)
  }
}

export const mutations = {
  setPosts (state, posts) {
    state.posts = posts
  },
  setPost (state, post) {
    state.post = post
  },
  addComment (state, comment) {
    state.post.comments.push(comment)
  }
}
export const getters = {
  getPosts (state) {
    return state.posts
  },
  getPost (state) {
    return state.post
  }
  /* getPost (state) {
    return id => state.posts.find(post => post.id === id)
  } */
}
