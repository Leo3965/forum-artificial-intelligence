export const languages = {
    portuguese: "PT",
    english: "EN"
};

export const switchLanguage = (language) => {
    return language === languages.english ? languages.portuguese : languages.english;
}
