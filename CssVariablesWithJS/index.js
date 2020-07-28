const inputs = document.querySelectorAll('.controls input');
// console.log(inputs);

function handleChange(){
    // console.log(this.value);
    // console.log(this.dataset);
    const suffix = this.dataset.sizing || ''; // or empty string to check undefined because
    // we don't have the suffix like px for the color attribute.
    // console.log(suffix);

    // now to select the css property of base, spacing and blur in js 
    // we have to select the whole document ie root and set the attribute to base, spacing and blur
    // we can do so becuase we have given name attribute to input elements with base, spacing and blur
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleChange));
inputs.forEach(input => input.addEventListener('mousemove', handleChange));
