#include <stdlib.h>
#include "lists.h"

/**
  * check_cycle - checks if a singly-linked list contains a cycle.
  * @list: A singly-linked list.
  *
  * Return: if there no cycle - 0
  *	if there is a cycle - 1
  */

int check_cycle(listint_t *list)
{
	listint_t *hero, *heroine;

	if (list == NULL || list->next == NULL)
		return (0);

	hero = list->next;
	heroine = list->next->next;

	while (hero && heroine && heroine->next)
	{
		if (hero == heroine)
			return (1);

		hero = hero->next;
		heroine = heroine->next->next;
	}
	return (0);
}
