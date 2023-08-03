

export const apiRequest = async (url:string, method = 'GET', body = null) => {
    const accessToken = localStorage.getItem('accessToken');
    
    var headers = new Headers({
        "Content-Type": 'application/json'
    })
    if (accessToken) {
      headers.append('Authorization', `Bearer ${accessToken}`);
    }
  
    try {
      const response = await fetch(url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
      });
  
      if (!response.ok) {
        // Gérer les erreurs de requête ici (si nécessaire).
        throw new Error('Erreur de requête');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
      throw error;
    }
  };