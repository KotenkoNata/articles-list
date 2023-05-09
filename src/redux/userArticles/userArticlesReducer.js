const defaultState = {
    articles: [],
    pinnedArticle: [],
    searchValue: "",
}

const ADD_ARTICLE = "ADD_ARTICLE";
const REMOVE_ARTICLE = "REMOVE_ARTICLE";
const ADD_PINEDARTICLE = "ADD_PINEDARTICLE";
const UPDATE_SEARCH = "UPDATE_SEARCH";

export const userArticlesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return {
                articles: [...state.articles, action.payload],
                pinnedArticle: [...state.pinnedArticle],
                searchValue: '',
            };
        case REMOVE_ARTICLE:
            return state.articles.filter(item => item.id !== action.payload)
        case ADD_PINEDARTICLE:
            if(state.pinnedArticle.length === 0) {
                const findPinnedArticle = state.articles.filter(item => {
                    if(item.id === action.payload) {
                        return item;
                    }
                });
                return {
                    articles: state.articles.filter(item => item.id !== action.payload),
                    pinnedArticle: [{...findPinnedArticle[0], isPinned: true}],
                    searchValue: '',
                }
            } else {
                const findArticle = {
                    ...state.pinnedArticle[0],
                    isPinned: false
                };
                return {
                    articles: [...state.articles, findArticle],
                    pinnedArticle: [],
                    searchValue: '',
                };
            }
        case UPDATE_SEARCH:
            console.log(`action.payload`, action.payload)
            return {
                articles: [...state.articles],
                pinnedArticle: [...state.pinnedArticle],
                searchValue: action.payload
            };

        default:
            return state;
    }
}

export const addUserArticleAction = (payload) => ({type: ADD_ARTICLE, payload: payload});
export const removeUserArticleAction = (payload) => ({type: REMOVE_ARTICLE, payload: payload});
export const addPinnedUserArticleAction = (payload) => ({type: ADD_PINEDARTICLE, payload: payload});

export const updateSearchValue = (payload) => ({type: UPDATE_SEARCH, payload: payload});

