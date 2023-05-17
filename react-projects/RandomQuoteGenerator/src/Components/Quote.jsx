import { useQuery } from 'react-query';

const apiKey = import.meta.env.VITE_API_KEY;

const categoryList = ["age", "alone", "amazing", "anger", "architecture", "art", "attitude", "beauty", "best", "birthday", "business", "car", "change", "communications", "computers", "cool", "courage", "dad", "dating", "death", "design", "dreams", "education", "environmental", "equality", "experience", "failure", "faith", "family", "famous", "fear", "fitness", "food", "forgiveness", "freedom", "friendship", "funny", "future", "god", "good", "government", "graduation", "great", "happiness", "health", "history", "home", "hope", "humor", "imagination", "inspirational", "intelligence", "jealousy", "knowledge", "leadership", "learning", "legal", "life", "love", "marriage", "medical", "men", "mom", "money", "morning", "movies", "success", "",];

const fetchQuote = async () => {
    let category = categoryList[Math.floor(Math.random() * categoryList.length - 1)];
    const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();

    if (data.length > 0) {
        return data[0].quote;
    }
    return '';
};

const RandomQuote = () => {
    const { data: quote, isLoading, isError, refetch } = useQuery('quote', fetchQuote);

    function handleQuote() {
        refetch();
    }

    return (
        <div className="quote-box">
            {isLoading ? (
                <p>Loading...</p>
            ) : isError ? (
                <p>Error fetching quote.</p>
            ) : (
                <>
                    <p>{quote}</p>
                    <button onClick={handleQuote}>Next</button>
                </>
            )}
        </div>
    );
};

export default RandomQuote;
