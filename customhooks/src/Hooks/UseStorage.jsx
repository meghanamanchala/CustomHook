const UseStorage = (key,initialValue) =>{
    const storedValue = JSON.parse(localStorage.getItem(key)) || initialValue

    const setStorage = (data) =>{
        localStorage.setItem('content',JSON.stringify(data))
        sessionStorage.setItem('content',JSON.stringify(data))
    }
    return [storedValue,setStorage]
}
export default UseStorage