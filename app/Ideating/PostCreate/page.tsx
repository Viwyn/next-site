"use client";

import Image from "next/image";
import React, { useState } from "react";

// Define a type for icon props
interface IconProps {
	className?: string; // className is optional
}

// Lucide React icons (assuming they are available in the environment)
// For a real React project, you would install them: npm install lucide-react
// For this Canvas environment, we'll simulate their presence or use inline SVGs if needed.
const ShareIcon = ({ className }: IconProps) => (
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
		<circle cx="18" cy="5" r="3" />
		<circle cx="6" cy="12" r="3" />
		<circle cx="18" cy="19" r="3" />
		<path d="m8.59 13.51 6.83 3.42" />
		<path d="m8.59 10.49 6.83-3.42" />
	</svg>
);
const TagIcon = ({ className }: IconProps) => (
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
		<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414L12.586 22a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828Z" />
		<path d="M7 7h.01" />
	</svg>
);
const UsersIcon = ({ className }: IconProps) => (
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
		<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
		<circle cx="9" cy="7" r="4" />
		<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
		<path d="M16 3.13a4 4 0 0 1 0 7.75" />
	</svg>
);
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

// Define a type for a Post
interface Post {
	id: string;
	content: string;
	tags: string[];
	audience: string[];
	aiRecommendation: string;
	timestamp: Date; // Using Date object for local state
}

interface GeminiResponse {
	candidates?: {
		content?: {
			parts?: { text: string }[];
		};
	}[];
}

// Audience interests for selection
const audienceInterests: string[] = [
	"Humanitarian",
	"Poverty Alleviation",
	"Health",
	"Medical",
	"Education",
	"Environmental",
	"Animal Welfare",
	"Arts & Culture",
	"Community",
	"Social Services",
];

function App() {
	const [postContent, setPostContent] = useState<string>("");
	const [tags, setTags] = useState<string>("");
	const [selectedAudience, setSelectedAudience] = useState<string[]>([]);
	const [aiRecommendation, setAiRecommendation] = useState<string>("");
	const [loadingAI, setLoadingAI] = useState<boolean>(false);
	const [posts, setPosts] = useState<Post[]>([]);

	// No Firebase initialization or authentication needed for MVP
	// No userId state needed as there's no backend user management

	const handleAudienceChange = (interest: string) => {
		setSelectedAudience((prev) =>
			prev.includes(interest)
				? prev.filter((item) => item !== interest)
				: [...prev, interest]
		);
	};

	const handleSharePost = async () => {
		if (!postContent.trim()) {
			setAiRecommendation("Please enter some content for your post.");
			return;
		}

		setLoadingAI(true);
		setAiRecommendation("Generating AI recommendation...");

		try {
			// Simulate AI recommendation using Gemini API
			const prompt: string = `Given the following post content, tags, and intended audience, suggest a brief, engaging headline or a short message to help it reach the target audience effectively.
      Post Content: "${postContent}"
      Tags: "${tags}"
      Audience Interests: "${selectedAudience.join(", ")}"
      `;

			const chatHistory: { role: string; parts: { text: string }[] }[] = [];
			chatHistory.push({ role: "user", parts: [{ text: prompt }] });
			const payload: object = { contents: chatHistory };
			const apiKey: string = ""; // Canvas will provide this at runtime
			const apiUrl: string = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

			const response: Response = await fetch(apiUrl, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});

			const result: GeminiResponse = await response.json();
			let generatedRecommendation: string = "";

			if (
				result.candidates &&
				result.candidates.length > 0 &&
				result.candidates[0].content &&
				result.candidates[0].content.parts &&
				result.candidates[0].content.parts.length > 0
			) {
				generatedRecommendation =
					result.candidates[0].content.parts[0].text;
				setAiRecommendation(generatedRecommendation);
			} else {
				generatedRecommendation =
					"AI could not generate a recommendation. Please try again.";
				setAiRecommendation(generatedRecommendation);
				console.error("Unexpected AI response structure:", result);
			}

			// Add post to local state
			const newPost: Post = {
				id: crypto.randomUUID(), // Generate a unique ID for the post
				content: postContent,
				tags: tags
					.split(",")
					.map((tag) => tag.trim())
					.filter((tag: string) => tag !== ""),
				audience: selectedAudience,
				aiRecommendation: generatedRecommendation,
				timestamp: new Date(), // Use current date for timestamp
			};

			setPosts((prevPosts) =>
				[newPost, ...prevPosts].sort(
					(a, b) => b.timestamp.getTime() - a.timestamp.getTime()
				)
			); // Add new post and re-sort
			setPostContent("");
			setTags("");
			setSelectedAudience([]);
			// Keep AI recommendation displayed for the last generated one until new post is started
		} catch (error: unknown) {
			console.error("Error fetching AI recommendation:", error);
			setAiRecommendation(
				"Failed to get AI recommendation. Please try again."
			);
		} finally {
			setLoadingAI(false);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center p-4 font-inter">
			<div>
				<Image
					src="/kiriwink.webp"
					alt="Kiri Logo"
					className="w-50 h-50 mx-auto mt-10%"
                    width={200}
                    height={200}
				/>
			</div>
			<div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-2xl border-5 border-[#3B82F6]">
				<h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
					Talk about your charity
				</h1>

				{/* Removed userId display as there's no backend user management */}

				<div className="mb-6">
					<label
						htmlFor="postContent"
						className="text-gray-700 text-sm font-medium mb-2 flex items-center"
					>
						<ShareIcon className="w-5 h-5 mr-2 text-[#FBBF24]" />
						your post content :3
					</label>
					<textarea
						id="postContent"
						className="w-full p-3 border text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FBBF24] focus:border-transparent transition duration-200 resize-y min-h-[120px]"
						placeholder="What is your post about?"
						value={postContent}
						onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
							setPostContent(e.target.value)
						}
						rows={5}
					></textarea>
				</div>

				<div className="mb-6">
					<label
						htmlFor="tags"
						className="text-gray-700 text-sm font-medium mb-2 flex items-center"
					>
						<TagIcon className="w-5 h-5 mr-2 text-[#FBBF24]" />
						Tags (comma-separated, e.g., react, ai, webdev)
					</label>
					<input
						type="text"
						id="tags"
						className="w-full p-3 border text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FBBF24] focus:border-transparent transition duration-200"
						placeholder="Enter tags relevant to your post"
						value={tags}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setTags(e.target.value)
						}
					/>
				</div>

				<div className="mb-6">
					<label className="text-gray-700 text-sm font-medium mb-3 flex items-center">
						<UsersIcon className="w-5 h-5 mr-2 text-[#FBBF24]" />
						Target Audience Interests
					</label>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
						{audienceInterests.map((interest: string) => (
							<label
								key={interest}
								className="flex items-center cursor-pointer"
							>
								<input
									type="checkbox"
									value={interest}
									checked={selectedAudience.includes(
										interest
									)}
									onChange={() =>
										handleAudienceChange(interest)
									}
									className="form-checkbox h-5 w-5 text-[#FBBF24] rounded-md focus:ring-[#c29d3f] transition duration-150 ease-in-out"
								/>
								<span className="ml-2 text-gray-700 text-sm">
									{interest}
								</span>
							</label>
						))}
					</div>
				</div>

				<button
					onClick={handleSharePost}
					className="w-full bg-[#FBBF24] hover:bg-[#FBBF24] text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
					disabled={loadingAI}
				>
					{loadingAI ? (
						<svg
							className="animate-spin h-5 w-5 mr-3 text-white"
							viewBox="0 0 24 24"
						>
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"
							></circle>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
					) : (
						<SparklesIcon className="w-5 h-5 mr-2" />
					)}
					{loadingAI
						? "Generating Recommendation..."
						: "Share Post & Get AI Recommendation"}
				</button>

				{aiRecommendation && (
					<div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg shadow-inner">
						<h3 className="text-lg font-semibold text-[#FBBF24] mb-2 flex items-center">
							<SparklesIcon className="w-5 h-5 mr-2 text-[#FBBF24]" />
							AI Recommendation
						</h3>
						<p className="text-gray-700 text-sm">
							{aiRecommendation}
						</p>
					</div>
				)}

				{posts.length > 0 && (
					<div className="mt-8 pt-6 border-t border-gray-200">
						<h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
							Your Recent Posts
						</h2>
						<div className="space-y-4">
							{posts.map((post: Post) => (
								<div
									key={post.id}
									className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100"
								>
									<p className="text-gray-800 font-medium">
										{post.content}
									</p>
									<p className="text-gray-600 text-sm mt-1">
										Tags:{" "}
										<span className="font-mono text-yellow-600">
											{post.tags?.join(", ") || "None"}
										</span>
									</p>
									<p className="text-gray-600 text-sm">
										Audience:{" "}
										<span className="font-mono text-yellow-600">
											{post.audience?.join(", ") ||
												"None"}
										</span>
									</p>
									{post.aiRecommendation && (
										<p className="text-yellow-700 text-xs mt-2 italic">
											AI Tip: &quot;
											{post.aiRecommendation}&quot;
										</p>
									)}
									<p className="text-gray-500 text-xs mt-2 text-right">
										{post.timestamp?.toLocaleString() ||
											"Just now"}
									</p>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
