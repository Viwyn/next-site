import Image from "next/image";
import React from "react";

// Define a type for icon props
interface IconProps {
	className?: string; // className is optional
}

// Icons (re-used from previous context, but self-contained here)
const SparklesIcon = ({ className }: IconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className={className}
	>
		<path d="m12 3-1.912 5.813L2 12l8.088 3.188L12 21l1.912-5.813L22 12l-8.088-3.188Z" />
	</svg>
);
const EyeIcon = ({ className }: IconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className={className}
	>
		<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
		<circle cx="12" cy="12" r="3" />
	</svg>
);

// Define a type for a Post
interface Post {
	id: string;
	content: string;
	tags: string[];
	audience: string[];
	aiRecommendation?: string; // Optional for posts without AI generation
	timestamp: Date; // Using Date object for local state
	isAISuggestion?: boolean; // New property to mark AI suggested posts
}

// This is the standalone PostFeedPage component
function App() {
	// Renamed to App as it's the main component for this immersive
	// Mock data for posts, with the first two as AI suggestions
	const mockPosts: Post[] = [
		{
			id: "ai-post-1",
			content:
				"Dive deep into the future of AI with our latest research on neural networks and their applications in healthcare.",
			tags: ["AI", "Healthcare", "Research", "Future"],
			audience: ["Technology", "Science"],
			aiRecommendation:
				"A must-read for AI enthusiasts and medical professionals.",
			timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
			isAISuggestion: true,
		},
		{
			id: "ai-post-2",
			content:
				"Exploring sustainable travel practices: how eco-tourism is changing the way we see the world.",
			tags: ["Travel", "Sustainability", "Eco-tourism"],
			audience: ["Travel", "Environment"],
			aiRecommendation:
				"Inspiring journey into responsible tourism. Share with fellow adventurers!",
			timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1), // 1 day ago
			isAISuggestion: true,
		},
		{
			id: "user-post-1",
			content:
				'Just finished a fantastic book on quantum physics! Highly recommend "Quantum Enigmas" by Dr. Alice Smith.',
			tags: ["Physics", "Books", "Science"],
			audience: ["Science", "Education"],
			aiRecommendation: "Great for curious minds!",
			timestamp: new Date(), // Just now
			isAISuggestion: false,
		},
	].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()); // Ensure latest is first

	return (
		<div className="min-h-screen bg-gradient-to-br from-amber-50 to-blue-100 flex flex-col items-center p-4 font-inter">
            <div>
                <Image src="/kirisit.webp" alt="Kiri Logo" className="w-50 h-50 mx-auto mt-10%" width={200} height={200}/>
            </div>
			<div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-2xl border border-gray-200">
				<h1 className="text-3xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
					<EyeIcon className="w-7 h-7 mr-3 text-blue-600" />
					Discover Posts
				</h1>

				<div className="space-y-6">
					{mockPosts.map((post: Post) => (
						<div
							key={post.id}
							className={`p-5 rounded-xl shadow-md border cursor-pointer hover:scale-105 transition-transform duration-150 ${
								post.isAISuggestion
									? "bg-yellow-50 border-yellow-300"
									: "bg-gray-50 border-gray-100"
							}`}
						>
							<div className="flex justify-between items-start mb-2">
								<p className="text-gray-800 font-semibold text-lg">
									{post.content}
								</p>
								{post.isAISuggestion && (
									<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-200 text-yellow-800">
										<SparklesIcon className="w-4 h-4 mr-1" />{" "}
										AI Suggestion
									</span>
								)}
							</div>
							<div className="flex flex-wrap gap-2 mb-3">
								{post.tags.map((tag, index) => (
									<span
										key={index}
										className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium"
									>
										{tag}
									</span>
								))}
							</div>
							<p className="text-gray-600 text-sm">
								Target Audience:{" "}
								<span className="font-mono text-blue-600">
									{post.audience?.join(", ") || "None"}
								</span>
							</p>
							{post.aiRecommendation &&
								!post.isAISuggestion && ( // Only show AI tip if not already an AI suggestion
									<p className="text-yellow-700 text-xs mt-2 italic">
										AI Tip: &quot;{post.aiRecommendation}&quot;
									</p>
								)}
							<p className="text-gray-500 text-xs mt-3 text-right">
								{post.timestamp?.toLocaleString() || "Just now"}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
