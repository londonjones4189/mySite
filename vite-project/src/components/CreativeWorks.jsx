import React, { useState } from 'react';
import { ArrowLeft, Plus, MessageCircle, X, Send, User } from 'lucide-react';

// Portfolio Template Component (from your provided code)
const PortfolioTemplate = ({
                               title,
                               date,
                               summary,
                               paragraphs,
                               onBack = () => window.history.back()
                           }) => {
    const [showInstructions, setShowInstructions] = useState(false);
    const [activeComment, setActiveComment] = useState(null);
    const [comments, setComments] = useState({});
    const [newComment, setNewComment] = useState('');
    const [newReply, setNewReply] = useState('');
    const [commenterName, setCommenterName] = useState('');
    const [activeReply, setActiveReply] = useState(null);

    const handleAddComment = (paragraphIndex) => {
        if (!newComment.trim()) return;

        const comment = {
            id: Date.now(),
            text: newComment,
            author: commenterName || 'Anonymous',
            timestamp: new Date().toLocaleString(),
            replies: []
        };

        setComments(prev => ({
            ...prev,
            [paragraphIndex]: [...(prev[paragraphIndex] || []), comment]
        }));

        setNewComment('');
        setCommenterName('');
        setActiveComment(null);
    };

    const handleAddReply = (paragraphIndex, commentId) => {
        if (!newReply.trim()) return;

        const reply = {
            id: Date.now(),
            text: newReply,
            author: commenterName || 'Anonymous',
            timestamp: new Date().toLocaleString()
        };

        setComments(prev => ({
            ...prev,
            [paragraphIndex]: prev[paragraphIndex].map(comment =>
                                                           comment.id === commentId
                                                           ? { ...comment, replies: [...comment.replies, reply] }
                                                           : comment
            )
        }));

        setNewReply('');
        setCommenterName('');
        setActiveReply(null);
    };

    const CommentIcon = ({ paragraphIndex, hasComments }) => (
        <button
            onClick={() => setActiveComment(activeComment === paragraphIndex ? null : paragraphIndex)}
            className="inline-flex items-center justify-center w-6 h-6 bg-gray-400 hover:bg-gray-500 text-white rounded-full transition-colors mr-2 flex-shrink-0"
        >
            {hasComments ? <MessageCircle size={14} /> : <Plus size={14} />}
        </button>
    );

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={onBack}
                    className="flex items-center text-gray-600 hover:text-gray-800 mb-8 transition-colors"
                >
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Portfolio
                </button>

                <div className="mb-6">
                    <h1 className="text-4xl font-bold text-gray-900 inline">{title}</h1>
                    <span className="text-gray-500 text-xl ml-4">| {date}</span>
                </div>

                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                    {summary}
                </p>

                <button
                    onClick={() => setShowInstructions(true)}
                    className="text-green-600 hover:text-green-700 mb-8 underline transition-colors"
                >
                    Click if you would like to learn how to annotate
                </button>

                {showInstructions && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-lg font-semibold">How to Annotate</h3>
                                <button
                                    onClick={() => setShowInstructions(false)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                                    <MessageCircle size={24} className="text-gray-400" />
                                    <span className="text-sm">This icon means there are already comments for that paragraph and you too can comment.</span>
                                </div>
                                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                                    <Plus size={24} className="text-gray-400" />
                                    <span className="text-sm">This icon means there are no comments for that paragraph and you can be the first to comment.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="bg-white rounded-lg shadow-sm p-8">
                    {paragraphs.map((paragraph, index) => (
                        <div key={index} className="mb-6">
                            <div className="flex items-start">
                                <CommentIcon
                                    paragraphIndex={index}
                                    hasComments={comments[index]?.length > 0}
                                />
                                <p className="text-gray-800 leading-relaxed flex-1">{paragraph}</p>
                            </div>

                            {activeComment === index && (
                                <div className="mt-4 ml-8 border-l-2 border-gray-200 pl-4">
                                    {comments[index]?.map((comment) => (
                                        <div key={comment.id} className="mb-4 bg-gray-50 rounded-lg p-3">
                                            <div className="flex items-center mb-2">
                                                <User size={16} className="text-gray-500 mr-2" />
                                                <span className="font-medium text-sm text-gray-700">{comment.author}</span>
                                                <span className="text-xs text-gray-500 ml-2">{comment.timestamp}</span>
                                            </div>
                                            <p className="text-gray-800 mb-2">{comment.text}</p>

                                            {comment.replies.map((reply) => (
                                                <div key={reply.id} className="ml-4 mt-2 p-2 bg-white rounded border-l-2 border-blue-200">
                                                    <div className="flex items-center mb-1">
                                                        <User size={14} className="text-gray-400 mr-1" />
                                                        <span className="font-medium text-xs text-gray-600">{reply.author}</span>
                                                        <span className="text-xs text-gray-400 ml-2">{reply.timestamp}</span>
                                                    </div>
                                                    <p className="text-sm text-gray-700">{reply.text}</p>
                                                </div>
                                            ))}

                                            <button
                                                onClick={() => setActiveReply(activeReply === comment.id ? null : comment.id)}
                                                className="text-blue-600 hover:text-blue-700 text-sm mt-2 transition-colors"
                                            >
                                                Reply
                                            </button>

                                            {activeReply === comment.id && (
                                                <div className="mt-3 ml-4">
                                                    <input
                                                        type="text"
                                                        placeholder="Your name (optional)"
                                                        value={commenterName}
                                                        onChange={(e) => setCommenterName(e.target.value)}
                                                        className="w-full p-2 border border-gray-300 rounded mb-2 text-sm"
                                                    />
                                                    <div className="flex space-x-2">
                                                        <input
                                                            type="text"
                                                            placeholder="Write a reply..."
                                                            value={newReply}
                                                            onChange={(e) => setNewReply(e.target.value)}
                                                            className="flex-1 p-2 border border-gray-300 rounded text-sm"
                                                            onKeyPress={(e) => e.key === 'Enter' && handleAddReply(index, comment.id)}
                                                        />
                                                        <button
                                                            onClick={() => handleAddReply(index, comment.id)}
                                                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded transition-colors"
                                                        >
                                                            <Send size={14} />
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}

                                    <div className="mt-4">
                                        <input
                                            type="text"
                                            placeholder="Your name (optional)"
                                            value={commenterName}
                                            onChange={(e) => setCommenterName(e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded mb-2"
                                        />
                                        <div className="flex space-x-2">
                                            <input
                                                type="text"
                                                placeholder="Add a comment..."
                                                value={newComment}
                                                onChange={(e) => setNewComment(e.target.value)}
                                                className="flex-1 p-3 border border-gray-300 rounded"
                                                onKeyPress={(e) => e.key === 'Enter' && handleAddComment(index)}
                                            />
                                            <button
                                                onClick={() => handleAddComment(index)}
                                                className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded transition-colors"
                                            >
                                                <Send size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="text-center text-gray-500 mt-8 italic">
                        ---fin---
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main Creative Works Component
const CreativeWorks = () => {
    const [selectedWork, setSelectedWork] = useState(null);

    // Sample creative works data
    const creativeWorks = [
        {
            id: 1,
            title: "Echoes of Tomorrow",
            date: "March 15, 2024",
            summary: "A speculative fiction piece exploring the intersection of memory and artificial intelligence in a post-digital society.",
            tags: ["published", "awarded"],
            paragraphs: [
                "In the year 2087, memories had become currency, and Maya Chen was bankrupt of her past. She stood in the sterile white chamber of the Memory Bank, watching as technicians prepared the neural interface that would extract her final recollection—her first kiss with David under the cherry blossoms of Central Park.",
                "The procedure was painless, they assured her, though Maya wondered how they could know. No one who sold their memories ever remembered the experience afterward. That was the point. The wealthy could purchase authentic experiences, while the poor traded their most precious moments for survival credits.",
                "As the neural crown descended upon her head, Maya closed her eyes and held tight to the memory one last time. She could feel David's nervous laugh, smell the spring air, taste the sweetness of possibility. In thirty seconds, it would belong to someone else—someone who could afford to buy love.",
                "The machine hummed to life, and Maya felt her consciousness drift. She thought about her grandmother's stories of a time when memories couldn't be bought or sold, when experiences belonged solely to those who lived them. How naive that seemed now, in an age where even thoughts had price tags."
            ]
        },
        {
            id: 2,
            title: "Digital Paradox",
            date: "January 8, 2024",
            summary: "An analytical essay examining the contradiction between technological connection and human isolation.",
            tags: ["published", "read"],
            paragraphs: [
                "We live in an age of unprecedented connectivity, yet loneliness has become a pandemic more pervasive than any virus. The digital revolution promised to bring us together, but instead has constructed invisible walls between authentic human experience and mediated interaction.",
                "Consider the modern coffee shop: dozens of people sit mere feet apart, each absorbed in their glowing screens, more engaged with distant strangers than with the person at the next table. We have traded presence for availability, depth for breadth, genuine connection for the illusion of infinite social networks.",
                "The paradox deepens when we examine how digital communication has evolved. We share our most intimate thoughts with followers we've never met while struggling to maintain meaningful conversations with our closest friends and family. The very tools designed to enhance communication have, in many ways, diminished our capacity for genuine dialogue.",
                "Yet within this contradiction lies opportunity. By recognizing the limitations of digital connection, we can begin to reclaim the art of presence, the practice of deep listening, and the courage to be vulnerable in physical spaces with real human beings."
            ]
        },
        {
            id: 3,
            title: "The Gardener's Daughter",
            date: "September 22, 2023",
            summary: "A lyrical short story about inheritance, loss, and finding beauty in unexpected places.",
            tags: ["annotate", "published"],
            paragraphs: [
                "Elena inherited more than her father's tools when he passed—she inherited his conversations with the earth. Every morning, she would find herself speaking to the tomato plants in Spanish, the same gentle encouragements he had whispered to coax life from stubborn seeds.",
                "The garden had been his sanctuary, a place where a man who cleaned office buildings at night could feel like a creator during the day. Now it was hers to tend, though she had never shown much interest in his passion while he lived. Grief, she discovered, had a way of making the dismissed suddenly sacred.",
                "As autumn arrived, Elena found herself understanding her father's philosophy: that growth required both nurturing and letting go, that some seasons were for planting and others for harvest, that beauty existed in the cycle of death and renewal that most people tried desperately to avoid.",
                "Standing among the dying plants, she finally heard what her father had been trying to teach her all along—that love was less about holding on and more about creating the conditions for something beautiful to flourish, even after you're gone."
            ]
        },
        {
            id: 4,
            title: "Fragments of Light",
            date: "November 11, 2023",
            summary: "A collection of micro-poetry exploring themes of hope, resilience, and the human capacity for renewal.",
            tags: ["read"],
            paragraphs: [
                "Even broken glass / catches sunlight— / proof that damage / doesn't diminish / our capacity / to shine.",
                "The tree grows / around the fence / that tried / to contain it, / bark embracing metal / until constraint / becomes part / of its strength.",
                "Morning arrives / with the audacity / of fresh starts, / painting yesterday's failures / in forgiving light / and whispering / 'try again.'",
                "We are all / walking libraries / of survival stories, / each scar a chapter / we learned / to write / with hope."
            ]
        }
    ];

    const getTagColor = (tag) => {
        switch (tag) {
            case 'read':
                return 'bg-blue-100 text-blue-800';
            case 'annotate':
                return 'bg-green-100 text-green-800';
            case 'published':
                return 'bg-purple-100 text-purple-800';
            case 'awarded':
                return 'bg-yellow-100 text-yellow-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    if (selectedWork) {
        return (
            <PortfolioTemplate
                title={selectedWork.title}
                date={selectedWork.date}
                summary={selectedWork.summary}
                paragraphs={selectedWork.paragraphs}
                onBack={() => setSelectedWork(null)}
            />
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Chapter Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Chapter 2: Creative Works</h1>
                    <p className="text-xl text-gray-600">A collection of stories, essays, and poetry</p>
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {creativeWorks.map((work) => (
                        <div
                            key={work.id}
                            onClick={() => setSelectedWork(work)}
                            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer p-6 border border-gray-200 hover:border-gray-300"
                        >
                            {/* Title and Date */}
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {work.title}
                                </h3>
                                <p className="text-gray-500 text-sm">| {work.date}</p>
                            </div>

                            {/* Summary */}
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                {work.summary}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {work.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreativeWorks;