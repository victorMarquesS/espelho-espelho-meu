import storiesData from '../data/stories.json';

function Stories() {
  return (
    <section className="stories-container">
      {storiesData.map((story) => (
        <div key={story.id} className="story-item">
          <div className="story-ring">
            <img src={story.avatar} alt={`Story de ${story.user}`} className="story-avatar" />
          </div>
          <span className="story-user">{story.user}</span>
        </div>
      ))}
    </section>
  );
}

export default Stories;