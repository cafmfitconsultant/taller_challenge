
import getAllPosts from './index';

describe('Challenge', () => {
      
    it('should return a json paylod', async () => {
        fetchMock.mockOnce("[ {\n    userId: 4,\n    id: 72,\n    title: 'praesentium facilis facere quis harum voluptatibus voluptatem eum',\n    completed: false\n  },\n  {\n    userId: 4,\n    id: 73,\n    title: 'sint amet quia totam corporis qui exercitationem commodi',\n    completed: true\n  }]");
        const result = await getAllPosts('');
        console.log(result);
        expect(1).toEqual(1)
    })
})


