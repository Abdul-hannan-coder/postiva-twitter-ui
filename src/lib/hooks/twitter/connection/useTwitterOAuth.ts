import axios from 'axios'

export const getTwitterOAuthUrl = async (authHeaders: Record<string, string>) => {
	// Replace with your backend endpoint for Twitter OAuth initiation
	const res = await axios.get('https://backend.postsiva.com/twitter/initiate-oauth', {
		headers: authHeaders,
	})
	// Assume response contains { url: 'https://twitter.com/oauth/authorize?...' }
	return res.data?.url
}
