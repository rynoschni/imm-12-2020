# The Cat Reducers, continued..

The goal of these exercises is to get more comfortable with dispatching actions and writing reducers that calculate new state.

## Exercise 1

### The "So Many Cats!" Reducer

Your initial state is:

```js
  cats: {
    1001: {
      name: 'Beans',
      activity: 'meowing',
    },
    1002: {
      name: 'Bandit',
      activity: 'eating',
    },
  },
```

Your reducer will respond to the following actions:

* `ACTION_SET_ACTIVITY`
* `ACTION_ADD_CAT`

Modify the action creators and reducers so that you can update an existing cat by their id, and you can add a new cat. In both cases, you'll need to identify the cat by their id in the action.payload.

#### NOTE

When you create a cat, generate a new id. Think in terms of something like this:
`const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);`

## Exercise 2 - Add Context!

The goal of these exercises is to repeat the Cat Reducer exercise using the Context API instead of Redux

Starting with the following state:

```js
{
  activity: 'napping'
}
```

Write a reducer that responds to the following actions:

* `ACTION_NAP`
* `ACTION_EAT`
* `ACTION_PLAY`

