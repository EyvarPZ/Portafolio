// Clients component
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CLIENTS } from '../graphql/queries';

const Clients = () => {
    const { t } = useTranslation();
    const { data } = useQuery(GET_CLIENTS, {
        variables: { limit: 10, offset: 0 },
    });
    const [currentPage, setCurrentPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(0);
    const [clients, setClients] = React.useState([]);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);
    const [searchLoading, setSearchLoading] = React.useState(false);

    React.useEffect(() => {
        if (data) {
            setClients(data.clients.items);
            setTotalPages(data.clients.totalPages);
        }
    }, []);

    const handleSearch = async (query) => {
        setSearchQuery(query);
        setSearchLoading(true);
        try {
            const response = await fetch(`/api/clients/search?query=${query}`);
            const results = await response.json();
            setSearchResults(results);
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
            setSearchLoading(false);
        }

        if (query) {
            setCurrentPage(1);
        }
    }


    if (loading) return <Loading />;
    if (error) return <p>{t('error.loadingClients')}</p>;
    const displayedClients = searchQuery ? searchResults : clients;
    return (
        <div className="clients">
            <h1>{t('clients.title')}</h1>
            <input
                type="text"
                placeholder={t('clients.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="search-input"
            />
            {searchLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="client-list">
                    {displayedClients.map((client) => (
                        <ClientCard key={client.id} client={client} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Clients;

// Current Pages y totalPages
const ClientCard = ({ client }) => {
    const navigate = useNavigate();
    return (
        <div className="client-card" onClick={() => navigate(`/clients/${client.id}`)}>
            <h2>{client.name}</h2>
            <p>{client.email}</p>
            <p>{client.phone}</p>
        </div>
    );
};

