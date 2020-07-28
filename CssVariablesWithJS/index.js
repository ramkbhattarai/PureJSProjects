const inputs = document.querySelectorAll('.controls input');
// console.log(inputs);

function handleChange(){
    // console.log(this.value);
    // console.log(this.dataset);
    const suffix = this.dataset.sizing || ''; // or empty string to check undefined because
    // we don't have the suffix like px for the color attribute.
    console.log(suffix);
}

inputs.forEach(input => input.addEventListener('change', handleChange));
inputs.forEach(input => input.addEventListener('mousemove', handleChange));
