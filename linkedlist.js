class Node{
    constructor(value)
        {
            this.value=value;
            this.next=null

        }
}
class linkedlist{
    constructor()
    {
        this.head=null
        this.size=0
    }

isEmpty()
{
    return this.size===0

}
addData(value)
{
    const node=new Node(value)
    if(this.isEmpty())
    {
        this.head=node;
    }
    else{
        node.next=this.head
        this.head=node
    }this.size++
}
print()
{
    if(this.isEmpty())
    {
        console.log("empty")

    }else
    {
        let curr= this.head
        let listvalues=''
        while(curr!=null)
        {
            listvalues=`${curr.value}`
        }
        curr=curr.next
    }
    console.log(listvalues)
}
}
const list= new linkedlist()
list.addData(10) 
list.addData(20)
list.print()