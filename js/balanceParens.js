function removeFrontClose(closeIndex,openIndex) {   //cannot start with a ) so removes all those at the front
    let count =0
    closeIndex.forEach(function (item) {       
        if (item < openIndex[0]) {           
            count+=1
        }
    })
    //console.log(count)
    closeIndex.splice(0,count)
}

function removeEndOpen(openIndex, closeIndex) {           //cannot end with a ( so removes all those at the end
    let count =0
    openIndex.forEach(function (item) {
        if (item > closeIndex[closeIndex.length-1]) {
            count+=1
        }
    })
    //console.log(count)
    openIndex.splice(openIndex.length-count,count)
}

function removeExtra(closeIndex,openIndex) {      //if open index has more than close index it removes the extra at the beg
  let extra = closeIndex.length - openIndex.length
  if (extra<0) {        //removes extra open
    openIndex.splice(0,Math.abs(extra))             // if close index has more it removes the ones that are not a match to the open index
  }                                                 // would this work for the whole problem? test it!
  else {
      for (let i=0;i<openIndex.length;i++) {
            if (closeIndex[i]<openIndex[i]){
                closeIndex.splice(i,1)
            }
        }
        if (closeIndex.length>openIndex.length) {
            let extra=closeIndex.length-openIndex.length
            closeIndex.splice(closeIndex.length-extra,extra)
        }
  //closeIndex.splice(closeIndex.length-extra,extra)
    }
}


// balanceParens = (str) =>
// {
function balanceParens(str) {
    let strArr= str.split("")
    let closeIndex=[]
    let openIndex=[]                    //creates an array of the index for (, ), and letters
    let letterIndex=[]
    let answer=""
    for (let i=0;i<strArr.length;i++) {
        if (strArr[i]==="(") {
            openIndex.push(i)
        }
        else if (strArr[i]=== ")") {
            closeIndex.push(i)
        }
        else {
            letterIndex.push(i)
        }
    }
    //console.log(closeIndex,openIndex,letterIndex)
    removeFrontClose(closeIndex,openIndex) //arrOne=closeIndex, arr2=openIndex
    removeEndOpen(openIndex,closeIndex)        //arrOne=openIndex, arrTwo=closeIndex
    //console.log(closeIndex,openIndex,letterIndex)
    if (closeIndex.length!==openIndex.length) {
        removeExtra(closeIndex,openIndex)
    }
    //console.log(closeIndex,openIndex,letterIndex)
    let sortedIndex=closeIndex.concat(openIndex,letterIndex).sort((a,b)=>a-b)
    // console.log(sortedIndex)
    // console.log(str[2])

    for (let index of sortedIndex) {
        answer+=str[index]
    }
    
    return answer


}
//console.log(balanceParens("))a)(bdd)c)c("))         //a(bdd)cc      passed
//console.log(balanceParens("abc(d)e(fgh))(i)j)k"))   //should = "abc(d)e(fgh)(i)jk"  passed
//console.log(balanceParens("abc((d)e(fgh)(i)j(k"))   //should = "abc(d)e(fgh)(i)jk"  passed

// Challenge: nested parentheses...
//console.log(balanceParens("abc(d)(ef(g(h))ij)k)lm()o)p"))  //should = "abc(d)(ef(g(h))ij)klm()op"  passed
console.log(balanceParens("a(bc(d())e(fgh))((i)j)k"))   //a(bc(d())e(fgh))((i)j)k


// balanceParens = (str) =>
// {
//}

// module.exports = { balanceParens }


