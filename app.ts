enum Access {
    ADMIN,
    MODERATOR,
    USER
}

const student: {
    name: string
    age: number
    gender?: string
    interest: string[]
    access: [number, string] // Tuple: not always use in real world scenario
    accessType: Access
} = {
    name: 'Juan',
    age: 19,
    interest: ["Basketball", "Reading"],
    access: [1, "admin"],
    accessType: Access.MODERATOR
}

if(student.accessType === 1) {
    console.log("is admin")
}

console.log(student)