
let student = [
    {
        rollNo: 1,
        name: 'Abi',
        age: 14,
        marks: [25, 30, 15, 33, 37]
    },
    {
        rollNo: 2,
        name: 'Anu',
        age: 15,
        marks: [44, 32, 49, 41, 26]
    },
]


function average(student)
{
    for(i=0;i<student.length;i++)
    {
        console.log(student[i].marks)
        let k=student[i].marks
        let sum=0
        for(j=0;j<k.length;j++)
        {
            sum=sum+k[j]
            avg=sum/k.length
        }
        console.log("sum=",sum)
        console.log("avg=",avg)
    }
}

average(student)