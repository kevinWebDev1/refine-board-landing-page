const categories = [
    {
        id: 'text-ops',
        name: 'Text Operations',
        icon: '🔄',
        commands: [
            { 
                code: '/rp', 
                name: 'Reply', 
                desc: 'Write natural human-like replies matching user vibe',
                example: {
                    input: 'hey',
                    output: 'yo what\'s up?'
                }
            },
            { 
                code: '/rs', 
                name: 'Roast', 
                desc: 'Write skeptical or critical reasoning responses',
                example: {
                    input: 'I like ice cream',
                    output: 'Why do you like ice cream? Isn\'t it just sugar and fat...'
                }
            },
            { 
                code: '/ct', 
                name: 'Change Tone', 
                desc: 'Rewrite text in specified tone (casual, formal, etc.)',
                example: {
                    input: '/ct [casual] I would like to inquire...',
                    output: 'Hey, are you free tomorrow?'
                }
            },
            { 
                code: '/el', 
                name: 'Elaborate', 
                desc: 'Expand text with more detail and context',
                example: {
                    input: 'The meeting went well',
                    output: 'The meeting went well, with everyone actively participating...'
                }
            },
            { 
                code: '/sh', 
                name: 'Shorten', 
                desc: 'Shorten text while retaining core meaning',
                example: {
                    input: 'In my personal opinion, which is based on...',
                    output: 'In my opinion...'
                }
            },
            { 
                code: '/tr', 
                name: 'Translate', 
                desc: 'Translate text to specified language',
                example: {
                    input: '/tr [Spanish] How are you today?',
                    output: '¿Cómo estás hoy?'
                }
            }
        ]
    },
    {
        id: 'content-gen',
        name: 'Content Generation',
        icon: '🎨',
        commands: [
            { 
                code: '/img', 
                name: 'Image Prompt', 
                desc: 'Generate detailed descriptive image prompts',
                example: {
                    input: '/img a serene mountain landscape',
                    output: 'A highly detailed description for generating an image...'
                }
            },
            { 
                code: '/vid', 
                name: 'Video Prompt', 
                desc: 'Generate detailed descriptive video prompts',
                example: {
                    input: '/vid a futuristic city with flying cars',
                    output: 'A detailed prompt for generating a video concept...'
                }
            }
        ]
    },
    {
        id: 'formatting',
        name: 'Formatting Tools',
        icon: '📊',
        commands: [
            { 
                code: '/li', 
                name: 'List', 
                desc: 'Convert text to bulleted or numbered lists',
                example: {
                    input: '/li Things I need: milk, bread, eggs, butter',
                    output: '• Milk\n• Bread\n• Eggs\n• Butter'
                }
            },
            { 
                code: '/em', 
                name: 'Email', 
                desc: 'Reformat text into professional email format',
                example: {
                    input: '/em Can you send me the project update by tomorrow? Thanks.',
                    output: 'Subject: Project Update Request\nDear [Recipient],\nCould you please...'
                }
            },
            { 
                code: '/es', 
                name: 'Extract Statements', 
                desc: 'Extract key statements or quotes from long text',
                example: {
                    input: '/es The company achieved record profits this year, but challenges remain...',
                    output: 'The company achieved record profits this year.'
                }
            }
        ]
    },
    {
        id: 'tone-spec',
        name: 'Tone Specialization',
        icon: '🎭',
        commands: [
            { 
                code: '/ct', 
                name: 'Change [Tone]', 
                desc: 'Rewrite text in formal and professional tone',
                example: {
                    input: '/ctf hey bro, what\'s up?',
                    output: 'Hello sir, how are you doing today?'
                }
            }
        ]
    },
    {
        id: 'professional',
        name: 'Professional Tools',
        icon: '💼',
        commands: [
            { 
                code: '/cr', 
                name: 'Craft Response', 
                desc: 'Craft professional customer responses',
                example: {
                    input: '/cr The delivery is late and I\'m frustrated',
                    output: 'We sincerely apologize for the delay in your delivery...'
                }
            }
        ]
    }
];

// Dynamically compute counts and stats
categories.forEach(cat => {
    cat.count = cat.commands.length;
});

const stats = {
    total: categories.reduce((sum, cat) => sum + cat.commands.length, 0),
    categories: categories.length,
    textOps: categories.find(c => c.id === 'text-ops')?.commands.length || 0,
    toneOptions: categories.find(c => c.id === 'tone-spec')?.commands.length || 0
};

const apkDownloadUrl = "https://github.com/kevinWebDev1/refine-board-landing-page/releases/latest/download/refiner-keyboard.apk";

export const COMMANDS_DATA = {
    categories,
    stats,
    apkDownloadUrl
};

