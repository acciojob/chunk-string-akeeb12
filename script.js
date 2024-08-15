function stringChop(str, size) {
  // your code here
	if(str === null || str === undefined)
	{
		return [];
	}
	const result = [];
	
	for(let i = 0; i < str.length; i +=chunkLength)
		{
			const chunk = str.substring(i, i + chunkLength)
			result.push(size);
		}
	return size;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));



