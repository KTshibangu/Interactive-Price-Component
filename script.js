const pageviewsContainer = document.querySelector('.pageviews');
const rangeInput = document.getElementById('range');
const priceContainer = document.querySelector('.price');
const periodContainer = document.querySelector('.period');
const switchPeriod = document.querySelector('input#billing-freq');
const switcher = document.querySelector('.switch');
const submitBtn = document.getElementById('submit');
const form = document.querySelector('.pricing-card');

const pageviewsData = [
    {
        pageViews: '10K PAGEVIEWS',
        monthlyCost: 8,
        leftPercentage: 0    
    },
    {
        pageViews: '50K PAGEVIEWS',
        monthlyCost: 12,
        leftPercentage: 25
    },
    {
        pageViews: '100K PAGEVIEWS',
        monthlyCost: 16,
        leftPercentage: 50
    },
    {
        pageViews: '500K PAGEVIEWS',
        monthlyCost: 24,
        leftPercentage: 75
    },
    {
        pageViews: '1M PAGEVIEWS',
        monthlyCost: 36,
        leftPercentage: 100
    },
]

window.addEventListener("DOMContentLoaded", () => {
    rangeInput.style.background = `linear-gradient(to right, #a4f3eb 50%, 
    var(--Super-Light-Grayish-Blue) 50%)`;
});

form.addEventListener('submit', (e) => e.preventDefault());

const getData = () => {
    const currentValue = rangeInput.value;
    const index = currentValue - 1;
    return {pageViews, monthlyCost, yearlyCost} = pageviewsData[index];
};

const updatePageviews = () => {
    const {pageViews} = getData();
    pageviewsContainer.textContent = `${pageViews}`;
};

const isAnnualFrequency = () => {return switchPeriod.checked};

const updateCost = () => {
    const {monthlyCost} = getData();
    const isAnnual = isAnnualFrequency();

    if(isAnnual){
        const price = ((monthlyCost * 12) * 0.75);
        priceContainer.textContent = `$${price.toFixed(2)}`;
        periodContainer.textContent = '/year';
        document.querySelector('.monthly').classList.remove('sw-active');
        document.querySelector('.yearly').classList.add('sw-active');
    } else {
        const price = monthlyCost;
        priceContainer.textContent = `$${price.toFixed(2)}`;
        periodContainer.textContent = '/month';
        document.querySelector('.monthly').classList.add('sw-active');
        document.querySelector('.yearly').classList.remove('sw-active');
    }
}

const updateLeftPercentage = () => {
    const {leftPercentage} = getData();
    rangeInput.style.background = `linear-gradient(to right, #a4f3eb ${leftPercentage}%, 
    var(--Super-Light-Grayish-Blue) ${leftPercentage}%)`;
}

const updateFormRangeInput = () => {
    updatePageviews();
    updateCost();
    updateLeftPercentage();
};

rangeInput.addEventListener("input", updateFormRangeInput);
switchPeriod.addEventListener('input', updateCost);
