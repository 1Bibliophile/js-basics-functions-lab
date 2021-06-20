// Code your solution in this file!

function distanceFromHqInBlocks()
{
    let block = 1, feet = 0;
}

function distanceFromHqInFeet(block, ft)
{
    ft = block * 264; // 1 Block = 264 ft

    return block, ft;
}

function distanceTravelledInFeet(block1, block2, dist)
{
    dist = Math.abs(block1 - block2)
    return dist
}

function calculatesFarePrice()
{
    let price = 0, block1 = 0, block2 = 1, distance = 0;

    distanceTravelledInFeet(block1, block2, distance)

    let ft = distanceFromHqInFeet(distance)

    if(ft <= 400)
    {
        price = 0   // The first 400 ft are free
    }
    else if(ft > 400 && ft <= 2500)
    {
        price = ft * 2
    }
    else if(ft > 2000 && ft < 2500)
    {
        price = ft * 7
    }
    else if(ft > 2500)
    {
        console.log("Cannot travel that far.")
    }

}