function HasSubtree(pRoot1, pRoot2)
{
  //二者中有任何一个 为 null 则不存在子结构
    if(!pRoot2 || !pRoot1)return false;
    return compareTree(pRoot1,pRoot2) || HasSubtree(pRoot1.left,pRoot2) || HasSubtree(pRoot1.right,pRoot2);
}
function compareTree(rootA,rootB){
  //如果 b 树已经递归完,说明 b 树确实是 a 的子结构
    if(!rootB)return true;
  //如果 b 还不为 null,而 a 已经递归完,则 b 也不是 a 的子结构
    if(!rootA)return false;
    if(rootA.val==rootB.val){
        return compareTree(rootA.left,rootB.left) && compareTree(rootA.right,rootB.right);
    }else{
        return false;
    }
}