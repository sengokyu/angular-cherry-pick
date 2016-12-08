# What is this?

This is equivalent as follows.

```
<ANY ng-repeat="option in options|filter:{id:selectedId}:true">{{option.title}}</ANY>
```


# Use case


In a controller, some array defined.


```
$scope.options = [
  {id:1, title:'foo'},
  {id:2, title:'bar'},
  {id:3, tille:'baz'}
]
```

In a template, a drop-down list uses the defined array.


```
<select ng-options="option.id as option.title for option in options"
  ng-model="selectedId"></select>
```


And, render a element as `title' property not `id' property.


```
{{options|cherrypick:{id:selectedId}:'title'}}
```


## Why does not bind a object, but a id.

Because the world is complex...


Of course, You can goes on a simple way.

```
<select ng-options="option as option.title for option in options"
  ng-model="selected"></select>

{{selected.title}}
```


