
export type Book = {
    id: number
    title: string
    author: string
    category: string
    available: boolean
    location: string
}

export const books: Book[] = [
    {
        id: 1,
        title: 'Introduction to Artificial Intelligence',
        author: 'Sarah Mitchell',
        category: 'Artificial Intelligence',
        available: true,
        location: 'Floor 2, Shelf AI-101',
    },
    {
        id: 2,
        title: 'Python Programming Fundamentals',
        author: 'James Carter',
        category: 'Programming',
        available: true,
        location: 'Floor 2, Shelf CS-205',
    },
    {
        id: 3,
        title: 'Machine Learning in Practice',
        author: 'Emily Roberts',
        category: 'Machine Learning',
        available: false,
        location: 'Floor 2, Shelf ML-310',
    },
    {
        id: 4,
        title: 'Data Science Essentials',
        author: 'Daniel Brooks',
        category: 'Data Science',
        available: true,
        location: 'Floor 2, Shelf DS-120',
    },
    {
        id: 5,
        title: 'Cybersecurity and Digital Ethics',
        author: 'Olivia Bennett',
        category: 'Cybersecurity',
        available: false,
        location: 'Floor 3, Shelf CY-215',
    },
]
