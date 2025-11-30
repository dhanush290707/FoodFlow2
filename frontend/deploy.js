const ghpages = require('gh-pages');

console.log('Starting deployment...');

ghpages.publish(
    'dist', // The folder where your built files are.
    {
        branch: 'gh-pages',
        // This explicitly tells gh-pages where to push the code
        repo: 'https://github.com/dhanush290707/FoodFlow.git'
    },
    (err) => {
        if (err) {
            console.error('Deployment Error:', err);
        } else {
            console.log('Deploy Complete!');
        }
    }
);