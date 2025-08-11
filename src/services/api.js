const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:8000/api/v1';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const token = localStorage.getItem('accessToken');
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        if (response.status === 401) {
          // Try to refresh token
          await this.refreshToken();
          // Retry original request with new token
          const newToken = localStorage.getItem('accessToken');
          if (newToken) {
            config.headers.Authorization = `Bearer ${newToken}`;
            const retryResponse = await fetch(url, config);
            if (retryResponse.ok) {
              return await retryResponse.json();
            }
          }
          // If refresh failed, redirect to login
          this.logout();
          throw new Error('Authentication failed');
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Auth methods
  async login(email, password) {
    const response = await this.request('/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    if (response.data?.accessToken) {
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
    }
    
    return response;
  }

  async register(userData) {
    return await this.request('/users/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async refreshToken() {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) throw new Error('No refresh token');

    const response = await this.request('/users/refresh-token', {
      method: 'POST',
      body: JSON.stringify({ refreshToken }),
    });

    if (response.data?.accessToken) {
      localStorage.setItem('accessToken', response.data.accessToken);
    }

    return response;
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.href = '/login';
  }

  async getCurrentUser() {
    return await this.request('/users/current-user');
  }

  // Video methods
  async getVideos(page = 1, limit = 20) {
    return await this.request(`/videos?page=${page}&limit=${limit}`);
  }

  async getVideoById(videoId) {
    return await this.request(`/videos/${videoId}`);
  }

  async uploadVideo(formData) {
    const token = localStorage.getItem('accessToken');
    return await fetch(`${this.baseURL}/videos`, {
      method: 'POST',
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: formData,
    }).then(res => res.json());
  }

  async updateVideo(videoId, updateData) {
    return await this.request(`/videos/${videoId}`, {
      method: 'PATCH',
      body: JSON.stringify(updateData),
    });
  }

  async deleteVideo(videoId) {
    return await this.request(`/videos/${videoId}`, {
      method: 'DELETE',
    });
  }

  async toggleVideoLike(videoId) {
    return await this.request(`/likes/toggle/v/${videoId}`, {
      method: 'POST',
    });
  }

  // Comments methods
  async getVideoComments(videoId) {
    return await this.request(`/comments/${videoId}`);
  }

  async addComment(videoId, content) {
    return await this.request(`/comments/${videoId}`, {
      method: 'POST',
      body: JSON.stringify({ content }),
    });
  }

  async updateComment(commentId, content) {
    return await this.request(`/comments/c/${commentId}`, {
      method: 'PATCH',
      body: JSON.stringify({ content }),
    });
  }

  async deleteComment(commentId) {
    return await this.request(`/comments/c/${commentId}`, {
      method: 'DELETE',
    });
  }

  // Subscription methods
  async toggleSubscription(channelId) {
    return await this.request(`/subscriptions/c/${channelId}`, {
      method: 'POST',
    });
  }

  async getChannelSubscribers(channelId) {
    return await this.request(`/subscriptions/c/${channelId}`);
  }

  async getUserSubscriptions(subscriberId) {
    return await this.request(`/subscriptions/u/${subscriberId}`);
  }

  // Playlist methods
  async createPlaylist(playlistData) {
    return await this.request('/playlist', {
      method: 'POST',
      body: JSON.stringify(playlistData),
    });
  }

  async getPlaylist(playlistId) {
    return await this.request(`/playlist/${playlistId}`);
  }

  async updatePlaylist(playlistId, updateData) {
    return await this.request(`/playlist/${playlistId}`, {
      method: 'PATCH',
      body: JSON.stringify(updateData),
    });
  }

  async addVideoToPlaylist(videoId, playlistId) {
    return await this.request(`/playlist/add/${videoId}/${playlistId}`, {
      method: 'PATCH',
    });
  }

  async removeVideoFromPlaylist(videoId, playlistId) {
    return await this.request(`/playlist/remove/${videoId}/${playlistId}`, {
      method: 'PATCH',
    });
  }

  async getUserPlaylists(userId) {
    return await this.request(`/playlist/user/${userId}`);
  }

  // Dashboard methods
  async getChannelStats() {
    return await this.request('/dashboard/stats');
  }

  async getChannelVideos() {
    return await this.request('/dashboard/videos');
  }

  // User profile methods
  async getUserProfile(username) {
    return await this.request(`/users/c/${username}`);
  }

  async updateProfile(updateData) {
    return await this.request('/users/update-account', {
      method: 'PATCH',
      body: JSON.stringify(updateData),
    });
  }

  async updateAvatar(formData) {
    const token = localStorage.getItem('accessToken');
    return await fetch(`${this.baseURL}/users/avatar`, {
      method: 'PATCH',
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: formData,
    }).then(res => res.json());
  }

  // Health check
  async healthCheck() {
    return await this.request('/healthcheck');
  }
}

export default new ApiService();