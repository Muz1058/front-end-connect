import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import apiService from '../services/api';

export const useVideos = (page = 1, limit = 20) => {
  return useQuery({
    queryKey: ['videos', page, limit],
    queryFn: () => apiService.getVideos(page, limit),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useVideo = (videoId) => {
  return useQuery({
    queryKey: ['video', videoId],
    queryFn: () => apiService.getVideoById(videoId),
    enabled: !!videoId,
  });
};

export const useVideoComments = (videoId) => {
  return useQuery({
    queryKey: ['comments', videoId],
    queryFn: () => apiService.getVideoComments(videoId),
    enabled: !!videoId,
  });
};

export const useUploadVideo = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (formData) => apiService.uploadVideo(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['videos'] });
    },
  });
};

export const useToggleVideoLike = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (videoId) => apiService.toggleVideoLike(videoId),
    onSuccess: (_, videoId) => {
      queryClient.invalidateQueries({ queryKey: ['video', videoId] });
    },
  });
};

export const useAddComment = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ videoId, content }) => apiService.addComment(videoId, content),
    onSuccess: (_, { videoId }) => {
      queryClient.invalidateQueries({ queryKey: ['comments', videoId] });
    },
  });
};

export const useToggleSubscription = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (channelId) => apiService.toggleSubscription(channelId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};