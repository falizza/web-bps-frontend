// src/context/PublicationContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { publicationService } from '../services/publicationServices';
import { useAuth } from '../hooks/useAuth';

const PublicationContext = createContext(null);

const PublicationProvider = ({ children }) => {
    const [publications, setPublications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { token } = useAuth();

    const fetchPublications = async () => {
        if (!token) return;
        setLoading(true);
        try {
            const data = await publicationService.getPublications(token);
            setPublications(data);
            setError(null);
        } catch (err) {
            setError(err.message);
            console.error("Gagal fetch publikasi:", err);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchPublications();
    }, [token]);

    const addPublication = async (newPub) => {
        try {
            const added = await publicationService.addPublication(newPub);
            setPublications((prev) => [added, ...prev]);
            setError(null);
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    const editPublication = async (updatedPub) => {
        try {
            const response = await publicationService.updatePublication(updatedPub.id, updatedPub); // update ke server
            await fetchPublications();
            setError(null);
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    const deletePublication = async (id) => {
        try {
            await publicationService.deletePublication(id, token); // kirim token juga kalau backend butuh
            setPublications(prev => prev.filter(pub => pub.id !== id));
            setError(null);
        } catch (err) {
            setError(err.message);
            alert('Gagal menghapus publikasi: ' + err.message);
        }
    };

    return (
        <PublicationContext.Provider
            value={{
                publications,
                loading,
                error,
                addPublication,
                editPublication,
                deletePublication,
                fetchPublications,
            }}
        >
            {children}
        </PublicationContext.Provider>
    );
};
export { PublicationContext, PublicationProvider };