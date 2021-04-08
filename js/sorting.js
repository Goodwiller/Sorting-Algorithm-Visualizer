

function swap(){

    let count=1;
        for(let i=0;i<swapper.length;i++){
            (function (i) {
                setTimeout(function () {
                    var first=swapper[i].i;
                    var second=swapper[i].j;
                    
                    count++;

                    let temp=BarArray[first].height;
                    BarArray[first].height=BarArray[second].height;
                    BarArray[second].height=temp;
    
                    let tempc=BarArray[first].colors;
                    BarArray[first].colors=BarArray[second].colors;
                    BarArray[second].colors=tempc;
    
                    let tempcoef=BarArray[first].heightcoef;
                    BarArray[first].heightcoef=BarArray[second].heightcoef;
                    BarArray[second].heightcoef=tempcoef;
                }, speed*i);
            })(i);
        }

        let id= setInterval(() => {
            if(count>=swapper.length)
                swapreturn(id);
        }, 500);
           
}




function bubble(){

    for(let i=0;i<numOfElments-1;i++){
        for(let j=0;j<numOfElments-i-1;j++){
                    if(valueArray[j]>valueArray[j+1]){    

                        swapper.push(new pair(j,j+1));
                        let tempo=valueArray[j];
                        valueArray[j]=valueArray[j+1];
                        valueArray[j+1]=tempo;
                    }
                    else{
                        swapper.push(new pair(j,j));
                    }
       }
       
    }
}





function insertionSort()
{

    for (let i = 1; i < numOfElments; i++)
    {
        key = valueArray[i];
        j = i - 1;
 
        while (j >= 0 && valueArray[j] > key)
        {
            valueArray[j + 1] = valueArray[j];
            swapper.push(new pair(j+1,j));
            j = j - 1;
        }
        valueArray[j + 1] = key;
    }
}




function selectionSort() 
{ 

    for (let i = 0; i < numOfElments-1; i++) 
    { 
        let min_idx = i; 
        for (j = i+1; j < numOfElments; j++) {
            swapper.push(new pair(j,j));
            if (valueArray[j] < valueArray[min_idx]) {
                min_idx = j;
            }
        }
        let temp=valueArray[min_idx];
        valueArray[min_idx]=valueArray[i];
        valueArray[i]=temp;
        swapper.push(new pair(min_idx,i)); 
    } 
}



function mergesortcaller(){
    mergesort(0,valueArray.length-1);
}


function mergesort(l,h){
    if(h<=l){
        return;
    }
    else{
        let mid=Math.floor((l+h)/2);

        mergesort(l,mid);
        mergesort(mid+1,h);
        merge(l,mid,mid+1,h);
    }
}


function merge(l,midl,mid,h){
    for(let i=l;i<=midl;i++){
        if(valueArray[i]>valueArray[mid]){

            swapper.push(new pair(i,mid));
            let temp=valueArray[i];
            valueArray[i]=valueArray[mid];
            valueArray[mid]=temp;

            let j=mid;

            while(j+1<=h && valueArray[j]>valueArray[j+1]){

                swapper.push(new pair(j,j+1));
                let temp=valueArray[j];
                valueArray[j]=valueArray[j+1];
                valueArray[j+1]=temp;

                j++;
            }
        }
    }
}



function quicksortcaller(){
    quicksort(0,valueArray.length-1);
}

function quicksort(l,h){
    if(h<=l)
        return;
    else{
        let p=partition(l,h);
        quicksort(l,p-1);
        quicksort(p+1,h);
    }
}

function partition(l,h){
    let pivot=valueArray[h];

    let i=l-1;

    for(let j=l;j<h;j++){
        if(valueArray[j]<pivot){
            i++;
            swapper.push(new pair(i,j));
            let temp=valueArray[i];
            valueArray[i]=valueArray[j];
            valueArray[j]=temp;
        }
        else{
            swapper.push(new pair(j,j));
        }
    }
    i++;
    swapper.push(new pair(i,h));
    let temp=valueArray[i];
    valueArray[i]=valueArray[h];
    valueArray[h]=temp;
    return i;
}

