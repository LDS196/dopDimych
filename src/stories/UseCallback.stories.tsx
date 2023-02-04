import React, {useCallback, useMemo} from 'react';
import {useState} from "react";

export default {
    title: 'Use.callback',
}
// export const Example1 = () => {
//     const [a, setA] = useState<number>(5)
//     const [b, setB] = useState<number>(5)
//     let resA = 1
//     let resB = 1
//     resA = useMemo(() => {
//         let temp = 1
//         for (let i = 1; i <= a; i++) {
//             let fake = 0
//             while (fake < 100000000) {
//                 fake++
//                 const fakeValue = Math.random()
//             }
//             temp = temp * i
//         }
//         return temp
//     }, [a])
//
//     for (let i = 1; i <= b; i++) {
//         resB = resB * i
//     }
//     return <>
//         <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
//         <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
//         <hr/>
//         <div>{resA}</div>
//         <div>{resB}</div>
//     </>
// }
//
//
// type UsersType = { users: Array<string> }
// const UsersSecret = (props: UsersType) => {
//     return <div>
//         {props.users.map((u, i) => <div key={i}>{u}</div>)}
//     </div>
// }


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['react', 'css', 'html', 'js', 'figma'])

    // const newArrFilter = useMemo(() => {
    //
    //     return books.filter(b => b.toLocaleLowerCase().indexOf('a') > -1)
    // }, [books])

    // const addBook = () => {
    //     const newBooks = [...books, 'Angular' + new Date().getTime()]
    //     setBooks(newBooks)
    // }
    const memoizedAddBook= useMemo(()=>{
        return () => {
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }
    },[books])
    const memoizedAddBook2= useCallback(()=>{

            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)

    },[books])
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        {counter}
        <Book
            // books={newArrFilter}
              addBook={memoizedAddBook2}
        />
    </>
}
type BooksType = {
    // books: Array<string>
    addBook:()=>void
}
const BooksSecret = (props: BooksType) => {
    console.log('render')
    return <div>
        <button onClick={() => props.addBook()}>Add Book</button>
        {/*{props.books.map((b, i) => <div key={i}>{b}</div>)}*/}
    </div>
}

const Book = React.memo(BooksSecret)